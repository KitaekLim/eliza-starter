import { ActionExample } from "@elizaos/core";

export const sendGlobalMessageExamples: ActionExample[][] = [
  [
    {
      user: "{{user1}}",
      content: {
        text: "Send a message to everyone in the casino",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll broadcast a message to all players in the casino.",
        action: "ABLY_SEND_GLOBAL_MESSAGE",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "Announce something to all players",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll send a global announcement to everyone.",
        action: "ABLY_SEND_GLOBAL_MESSAGE",
      },
    },
  ],
];

export const sendPrivateMessageExamples: ActionExample[][] = [
  [
    {
      user: "{{user1}}",
      content: {
        text: "Send a private message to channel-123",
        channelId: "channel-123",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll send a private message to that channel.",
        action: "ABLY_SEND_PRIVATE_MESSAGE",
        channelId: "channel-123",
      },
    },
  ],
  [
    {
      user: "{{user1}}",
      content: {
        text: "DM this player",
        channelId: "private-456",
      },
    },
    {
      user: "{{agent}}",
      content: {
        text: "I'll send them a direct message.",
        action: "ABLY_SEND_PRIVATE_MESSAGE",
        channelId: "private-456",
      },
    },
  ],
];
