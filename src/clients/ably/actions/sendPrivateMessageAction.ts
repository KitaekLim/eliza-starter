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
import { sendPrivateMessageExamples } from "./examples.ts";

export const sendPrivateMessageAction: Action = {
  name: "ABLY_SEND_PRIVATE_MESSAGE",
  similes: ["PRIVATE", "DM", "DIRECT_MESSAGE", "WHISPER"],
  description: "Send a private message to a specific channel",
  examples: sendPrivateMessageExamples,
  validate: async (runtime: IAgentRuntime) => {
    await validateAblyConfig(runtime);
    return true;
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    state: State,
    options: { channelId: string },
    callback: HandlerCallback
  ) => {
    const config = await validateAblyConfig(runtime);
    const ablyService = createAblyService(config.ABLY_API_KEY);

    try {
      await ablyService.sendPrivateMessage(
        message.content.text,
        options.channelId
      );
      elizaLogger.success(`Successfully sent private message`);
      return true;
    } catch (error: any) {
      elizaLogger.error("Error in Ably private message handler:", error);
      callback({
        text: `Error sending private message: ${error.message}`,
        content: { error: error.message },
      });
      return false;
    }
  },
};
