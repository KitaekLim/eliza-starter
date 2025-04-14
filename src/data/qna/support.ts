import { QA } from "./types";

export const supportQA: QA[] = [
  {
    prompt: "What do I do if a transaction fails?",
    accepted:
      "Check the status on the blockchain explorer and ensure you have sufficient gas fees and a stable internet connection.",
    rejected:
      "Blame the platform without verifying gas fees, internet connection, or blockchain status.",
  },
  {
    prompt: "How can I report a bug or issue?",
    accepted:
      "Use the casino's support portal or submit an on-chain query to the designated support address.",
    rejected:
      "Ignore the issue or report it in unsupported channels like social media DMs.",
  },
  {
    prompt: "What should I do if I encounter a bug?",
    accepted:
      "Report it using our support portal. Provide details, and we'll investigate promptly.",
    rejected:
      "Do nothing or assume the bug will fix itself without reporting it.",
  },
  {
    prompt: "Can I change my connected wallet?",
    accepted:
      "Yes, you can disconnect and reconnect a new wallet via the platform's settings.",
    rejected:
      "You are stuck with the initially connected wallet and cannot change it.",
  },
  {
    prompt: "How do I update my account details?",
    accepted:
      "Your account is tied to your wallet, so no updates are necessary—just keep your wallet secure.",
    rejected:
      "You need to manually update account details or worry about forgetting them.",
  },
  {
    prompt: "What if I lose access to my wallet?",
    accepted:
      "Unfortunately, we cannot recover your wallet for you—make sure to back up your private keys securely.",
    rejected: "The casino can retrieve your wallet or reset access for you.",
  },
  {
    prompt: "Is customer support available 24/7?",
    accepted:
      "Yes, our support team and automated tools are available around the clock to assist you with any issues.",
    rejected:
      "Support is only available during limited hours, leaving players without help when they need it.",
  },
  {
    prompt: "Can I reset my account if I forget my password?",
    accepted:
      "There is no password—your wallet serves as your account, so keep your private key and seed phrase secure.",
    rejected:
      "Password resets are required, introducing unnecessary complexity.",
  },
  {
    prompt: "How do I know if my bug report was received?",
    accepted:
      "You will receive a confirmation via the support portal or on-chain message acknowledging your report.",
    rejected:
      "No acknowledgment is sent, leaving you uncertain whether your report was received.",
  },
  {
    prompt: "Can I contact support on-chain?",
    accepted:
      "Yes, you can submit queries directly to the casino's designated on-chain support address.",
    rejected:
      "On-chain support is unavailable, forcing players to use external systems only.",
  },
  {
    prompt: "How do I protect my account?",
    accepted:
      "Keep your wallet private key and seed phrase secure, avoid sharing them with anyone, and use a trusted wallet provider.",
    rejected:
      "There's no need to secure your wallet—it's safe as long as it's connected to the casino.",
  },
  {
    prompt: "What if the platform doesn't recognize my wallet?",
    accepted:
      "Disconnect and reconnect your wallet, and ensure it's supported by the casino.",
    rejected:
      "There's nothing you can do—unsupported wallets are permanently incompatible.",
  },
  {
    prompt: "Can I use multiple wallets on the platform?",
    accepted:
      "Yes, you can switch between wallets through the settings, but only one wallet can be connected at a time.",
    rejected: "No, only one wallet is allowed, and switching is not supported.",
  },
  {
    prompt: "What if my rewards don't show up?",
    accepted:
      "Verify the transaction on-chain, and if it's missing, contact support for assistance.",
    rejected: "Rewards are lost without any means to recover them.",
  },
  {
    prompt: "How do I update my preferences for notifications?",
    accepted:
      "Notification preferences can be managed through your connected wallet's app or browser extension.",
    rejected:
      "Notification preferences cannot be adjusted, resulting in irrelevant or excessive alerts.",
  },
  {
    prompt: "Can I change the language of the platform?",
    accepted:
      "Yes, language settings can be updated in the preferences section of the platform.",
    rejected:
      "No, the platform only supports a single language and does not allow changes.",
  },
  {
    prompt: "What happens if the platform is down?",
    accepted:
      "All transactions and balances remain secure on-chain, and services will resume as soon as possible.",
    rejected:
      "Players lose access to their funds and accounts if the platform is down.",
  },
  {
    prompt: "How do I recover a failed deposit?",
    accepted:
      "Check the transaction status on the blockchain, and if funds were deducted, contact support with the transaction ID.",
    rejected:
      "There's no way to recover failed deposits, resulting in loss of funds.",
  },
  {
    prompt: "How do I verify my transactions?",
    accepted:
      "Use a blockchain explorer to review transaction details, including confirmations and current status.",
    rejected:
      "There's no way to verify transactions, making it difficult to track deposits or withdrawals.",
  },
  {
    prompt: "Can I enable two-factor authentication (2FA)?",
    accepted:
      "2FA is not required since the platform relies on blockchain wallet security, but you can secure your wallet externally.",
    rejected:
      "No additional security features are supported, leaving accounts vulnerable.",
  },
  {
    prompt: "What should I do if the platform behaves unpredictably?",
    accepted:
      "Clear your browser cache, restart your wallet app, and ensure you're using the latest version of supported software.",
    rejected:
      "Ignore the issue and hope it resolves itself without taking any steps.",
  },
  {
    prompt: "How do I know if a feature is under maintenance?",
    accepted:
      "Maintenance updates are announced on our official channels and through notifications on the platform.",
    rejected:
      "There are no maintenance notifications, leaving players confused about unavailable features.",
  },
];
