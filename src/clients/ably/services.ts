import { IMessage } from "./ably-client";

export const createAblyService = (apiKey: string) => {
  const decodedKey = Buffer.from(apiKey, "base64").toString();

  const sendGlobalMessage = async (message: IMessage) => {
    try {
      const response = await fetch(
        "https://rest.ably.io/channels/global-chat/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${apiKey}`,
          },
          body: JSON.stringify({
            name: "message",
            data: {
              text: message.text,
              username: message.userName || "AI Bot",
              type: "global",
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error sending message to Ably:", error);
      throw error;
    }
  };

  const sendPrivateMessage = async (text: string, channelId: string) => {
    const ably = new (await import("ably")).Realtime({
      key: decodedKey,
      clientId: "eliza-pitboss",
    });

    try {
      const channel = ably.channels.get(channelId);
      await channel.publish("message", {
        text,
        username: "Pitboss",
        type: "bot",
      });
      await ably.close();
      return true;
    } catch (error) {
      await ably.close();
      throw error;
    }
  };

  return { sendGlobalMessage, sendPrivateMessage };
};
