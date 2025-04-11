import {
  elizaLogger,
  Action,
  HandlerCallback,
  IAgentRuntime,
  Memory,
  State,
} from "@elizaos/core";
import { validateAblyConfig } from "../environment.ts";
import { createAblyService } from "../services.ts";
import { sendGlobalMessageExamples } from "./examples.ts";

export const sendGlobalMessageAction: Action = {
  name: "ABLY_SEND_GLOBAL_MESSAGE",
  similes: ["CHAT", "MESSAGE", "GLOBAL", "BROADCAST", "ANNOUNCE"],
  description: "Send a message to the global chat channel",
  examples: sendGlobalMessageExamples,
  validate: async (runtime: IAgentRuntime) => {
    await validateAblyConfig(runtime);
    return true;
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    state: State,
    _options: { [key: string]: unknown },
    callback: HandlerCallback
  ) => {
    const config = await validateAblyConfig(runtime);
    const ablyService = createAblyService(
      Buffer.from(config.ABLY_API_KEY).toString("base64")
    );

    try {
      await ablyService.sendGlobalMessage({
        text: message.content.text,
        userName: runtime.character.name,
      });
      elizaLogger.success(`Successfully sent global message`);
      return true;
    } catch (error: any) {
      elizaLogger.error("Error in Ably plugin handler:", error);
      callback({
        text: `Error sending message: ${error.message}`,
        content: { error: error.message },
      });
      return false;
    }
  },
};
