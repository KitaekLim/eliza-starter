import { Request, Response } from "express";
import { AgentRuntime } from "@elizaos/core";
import { jwtVerify } from "jose";

interface PrivateMessageRequest {
  text: string;
  channelId: string;
  token?: string;
}

interface JwtVerificationError extends Error {
  code?: string;
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
      const authHeader = req.headers.authorization;
      const token = authHeader?.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : null;

      if (!token) {
        return res.status(401).json({ error: "Authentication required" });
      }

      try {
        const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

        if (!JWT_SECRET) {
          console.error("JWT_SECRET not defined in environment");
          return res.status(500).json({ error: "Server configuration error" });
        }

        const { payload } = await jwtVerify(
          token,
          new TextEncoder().encode(JWT_SECRET)
        );

        console.log("Authenticated user:", payload.personalWallet);
      } catch (verifyError) {
        const jwtError = verifyError as JwtVerificationError;
        console.error(
          `Token verification failed: ${jwtError.code || jwtError.message}`
        );
        return res.status(401).json({ error: "Invalid authentication token" });
      }

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
