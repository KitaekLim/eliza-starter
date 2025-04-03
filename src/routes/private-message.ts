import { Request, Response } from "express";
import { AgentRuntime } from "@elizaos/core";

interface PrivateMessageRequest {
  text: string;
  channelId: string;
}

export function createPrivateMessageHandler(runtime: AgentRuntime) {
  return async function handlePrivateMessage(
    req: Request<{ agentId: string }, any, PrivateMessageRequest>,
    res: Response
  ) {
    const { text, channelId } = req.body;

    if (!text || !channelId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const ablyClient = runtime.clients.find(
        (client) => "handlePrivateMessage" in client
      );

      if (!ablyClient) {
        throw new Error("Ably client not initialized");
      }

      await ablyClient.handlePrivateMessage(text, channelId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error processing private message:", error);
      res.status(500).json({ error: "Failed to process message" });
    }
  };
}
