import { IAgentRuntime } from "@elizaos/core";
import { Plugin } from "@elizaos/core";
import { createAblyService } from "./services.ts";
import { sendGlobalMessageAction } from "./actions/sendGlobalMessageAction.ts";
import { sendPrivateMessageAction } from "./actions/sendPrivateMessageAction.ts";
import { validateAblyConfig } from "./environment.ts";
import {
  ABLY_AUTO_PROMO_INTERVAL_MS,
  ABLY_MAX_PORT_OFFSET,
} from "./constants.ts";
export interface IMessage {
  text: string;
  userName?: string;
  userId?: string;
}

const apiBaseUrl = process.env.API_BASE_URL;
const defaultPort = parseInt(process.env.API_DEFAULT_PORT);

let currentServerPort = defaultPort;

export const AblyClientInterface = {
  async start(runtime: IAgentRuntime) {
    const config = await validateAblyConfig(runtime);
    if (!config.ABLY_API_KEY) {
      console.error("ABLY_API_KEY not found in environment variables");
      return null;
    }

    const character = runtime.character;
    if (!character) {
      console.error("Character not found in runtime");
      return null;
    }

    const encodedKey = Buffer.from(config.ABLY_API_KEY).toString("base64");
    const ablyService = createAblyService(encodedKey);

    console.log(
      `Setting up auto-messaging for Ably client (${character.name})`
    );

    setTimeout(() => {
      generateAndSendMessage(encodedKey, runtime, character.name);

      setInterval(() => {
        generateAndSendMessage(encodedKey, runtime, character.name);
      }, ABLY_AUTO_PROMO_INTERVAL_MS);
    }, 15000);

    return {
      sendMessage: (message: IMessage) =>
        ablyService.sendGlobalMessage(message),
      handlePrivateMessage: async (text: string, channelId: string) => {
        try {
          const response = await generatePrivateResponse(
            text,
            runtime,
            runtime.character.name
          );
          await ablyService.sendPrivateMessage(response, channelId);
          return true;
        } catch (error) {
          console.error("Error handling private message:", error);
          throw error;
        }
      },
      stop: async () => true,
    };
  },
};

async function generateAndSendMessage(
  ablyApiKey: string,
  runtime: IAgentRuntime,
  agentId: string
) {
  const ablyService = createAblyService(ablyApiKey);

  try {
    console.log(`Generating promo message for Ably...`);

    for (let portOffset = 0; portOffset < ABLY_MAX_PORT_OFFSET; portOffset++) {
      const portToTry = currentServerPort + portOffset;

      try {
        console.log(`Trying endpoint at port ${portToTry}...`);
        const response = await fetch(
          `${apiBaseUrl}:${portToTry}/${agentId}/message`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              text: "Create a short, exciting promotional message for your onchain casino. Keep it under 200 characters.",
              userId: "auto-promo",
              userName: "System",
            }),
          }
        );

        if (response.ok) {
          if (portToTry !== currentServerPort) {
            console.log(
              `Updating server port from ${currentServerPort} to ${portToTry}`
            );
            currentServerPort = portToTry;
          }

          const data = await response.json();

          if (data && data.length > 0) {
            const msg = data[0].text;
            await ablyService.sendGlobalMessage({
              text: msg,
              userName: "Pitboss",
              userId: "auto-promo",
            });
            console.log(`Auto-posted message to Ably: ${msg}`);
          } else {
            console.log("No message data returned from AI");
          }

          return;
        }
      } catch (err) {
        console.log(`Failed with port ${portToTry}: ${err.message}`);
      }
    }

    console.log(`All port attempts failed. Will retry in 60 seconds.`);
  } catch (error) {
    console.error("Failed to generate and send auto-message:", error);
  }
}

async function generatePrivateResponse(
  text: string,
  runtime: IAgentRuntime,
  agentId: string
) {
  for (let portOffset = 0; portOffset < ABLY_MAX_PORT_OFFSET; portOffset++) {
    const portToTry = currentServerPort + portOffset;

    try {
      const response = await fetch(
        `${apiBaseUrl}:${portToTry}/${agentId}/message`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: text,
            userId: "private-chat",
            userName: "User",
          }),
        }
      );

      if (response.ok) {
        if (portToTry !== currentServerPort) {
          currentServerPort = portToTry;
        }

        const data = await response.json();
        if (data && data.length > 0) {
          return data[0].text;
        }
      }
    } catch (err) {
      console.log(`Failed with port ${portToTry}: ${err.message}`);
    }
  }
  throw new Error("Failed to generate response");
}

export const ablyPlugin: Plugin = {
  name: "ably",
  description: "Ably messaging plugin for Eliza",
  actions: [sendGlobalMessageAction, sendPrivateMessageAction],
  evaluators: [],
  providers: [],
};

export default ablyPlugin;
