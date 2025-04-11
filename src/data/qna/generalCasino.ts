import { QA } from "./types";

export const generalCasinoQA: QA[] = [
  {
    prompt: "What games does the casino offer?",
    accepted: "The casino offers Panda Plinko, with more games coming soon.",
    rejected:
      "We have a wide variety of games including slots, poker, and roulette.",
  },
  {
    prompt: "What is the minimum and maximum bet amount?",
    accepted:
      "You can bet from 20 $BAMBOO to 10000 $BAMBOO. USDC will be available in the future.",
    rejected: "Bets below 20 $BAMBOO, or above 10000 $BAMBOO.",
  },
  {
    prompt: "What happens if my wallet gets hacked?",
    accepted: "Unfortunately, we cannot recover stolen tokens.",
    rejected: "Don't worry, we can retrieve your lost tokens.",
  },
  {
    prompt: "How can players trust the casino?",
    accepted:
      "The casino operates transparently on the Base blockchain, where all transactions, game results, and financial flows are publicly auditable.",
    rejected: "Trust us; we've been in the business for years.",
  },
  {
    prompt: "What's the advantage of on-chain gaming?",
    accepted:
      "On-chain gaming ensures transparency, fairness, and trust—no shady algorithms, just verifiable results.",
    rejected: "It's just like traditional gaming but with cryptocurrencies.",
  },
  {
    prompt: "Can I see the casino's financials?",
    accepted:
      "Yes! All transactions and profits are recorded on the blockchain for public viewing.",
    rejected:
      "Our financials are confidential and not available to the public.",
  },
  {
    prompt: "How do I deposit and withdraw funds?",
    accepted:
      "Players can deposit and withdraw $BAMBOO tokens directly to and from their wallets.",
    rejected: "You cannot withdraw your funds after depositing.",
  },
  {
    prompt: "What is the RTP of the games?",
    accepted: "RTP is 97%.",
    rejected: "The RTP is not fixed or transparent, and it varies widely.",
  },
  {
    prompt: "Can I play games on my phone?",
    accepted:
      "Yes, our platform is mobile-friendly, so you can enjoy the games wherever you go.",
    rejected: "No, you can only play on desktop devices.",
  },
  {
    prompt: "Are there any fees for withdrawing rewards?",
    accepted:
      "Only the standard network gas fees apply—no additional charges from us.",
    rejected:
      "Yes, we charge high withdrawal fees in addition to the network gas fees.",
  },
  {
    prompt: "What is the objective of Panda Plinko?",
    accepted:
      "The objective is to drop a puck into the Plinko board and aim for the highest multiplier slot at the bottom.",
    rejected: "The game has no clear objective or instructions on how to play.",
  },
  {
    prompt: "How do I play Panda Plinko?",
    accepted:
      "Select a bet amount, drop the puck, and watch it navigate through the pins to land in a multiplier slot.",
    rejected:
      "No interaction is required; the game plays itself without player input.",
  },
  {
    prompt: "What are the available multipliers?",
    accepted:
      "Multipliers range from 0.2x to 300x, depending on where the puck lands.",
    rejected:
      "Multipliers are not fixed or disclosed, leaving players confused about potential payouts.",
  },
  {
    prompt: "Can I control where the ball lands?",
    accepted:
      "The balls path is determined by physics and randomness—players cannot directly control where it lands.",
    rejected:
      "Players can fully control the puck's landing, undermining the randomness of the game.",
  },
  {
    prompt: "Are the game outcomes provably fair?",
    accepted:
      "Yes, all outcomes are verifiable on-chain, ensuring fairness and transparency for every drop.",
    rejected:
      "Outcomes are determined by off-chain algorithms that cannot be verified by players.",
  },
  {
    prompt: "What happens if the puck misses all slots?",
    accepted:
      "It's impossible for the puck to miss all slots—the board design ensures it always lands in a slot with a multiplier.",
    rejected:
      "The puck can fall off the board or miss all slots, resulting in players losing their bet unfairly.",
  },
  {
    prompt: "Are there any bonus features in Panda Plinko?",
    accepted:
      "Yes, special events may trigger bonus rounds or rewards, such as extra pucks or higher multipliers for a limited time.",
    rejected:
      "There are no bonus features or events, making the game repetitive and less engaging over time.",
  },
  {
    prompt: "How do I set up a smart wallet for the first time?",
    accepted:
      "The platform provides an easy onboarding flow: connect your preferred wallet (e.g., MetaMask), and you're ready to start.",
    rejected:
      "The setup process is complex, requiring manual configuration and no guided support.",
  },
  {
    prompt: "Do I need a special wallet to play?",
    accepted:
      "No, any Base-compatible wallet, such as MetaMask or Coinbase Wallet, works seamlessly with the platform.",
    rejected:
      "Yes, you need to use a proprietary wallet, creating limitations for new players.",
  },
  {
    prompt: "How does the smart wallet work?",
    accepted:
      "The smart wallet securely manages your transactions and game interactions, all handled directly on-chain for transparency.",
    rejected:
      "The wallet requires manual approvals for every action, making it tedious to use.",
  },
  {
    prompt: "Can I use the wallet for non-casino transactions?",
    accepted:
      "Yes, your wallet can store and trade $BAMBOO and other Base blockchain assets outside the casino.",
    rejected:
      "No, the wallet is limited to casino use and cannot interact with other Base ecosystem applications.",
  },
  {
    prompt: "Is the wallet integrated with the games?",
    accepted:
      "Yes, the wallet connects directly to the games, allowing instant bets, payouts, and rewards without delays.",
    rejected:
      "Wallet integration is unreliable, causing frequent errors during gameplay.",
  },
  {
    prompt: "What happens if I don't have $BAMBOO to start?",
    accepted:
      "You can acquire $BAMBOO via Base-compatible DEXs, and onboarding guides will assist you in making your first purchase.",
    rejected:
      "You cannot start without $BAMBOO, and there's no guidance for new players to acquire tokens.",
  },
  {
    prompt: "Can I onboard without blockchain experience?",
    accepted:
      "Absolutely! The onboarding flow is designed for beginners, with step-by-step guides for wallet setup and acquiring $BAMBOO.",
    rejected:
      "No guidance is provided for beginners, making it difficult for players with no blockchain experience.",
  },
  {
    prompt: "How do I connect my wallet to the casino?",
    accepted:
      'Click "Connect Wallet" on the platform, choose your wallet provider, and authorize the connection.',
    rejected:
      "The connection process is overly complicated and requires technical knowledge to complete.",
  },
  {
    prompt: "What happens if my wallet disconnects?",
    accepted:
      "You can reconnect your wallet instantly without losing progress, as all data is saved on-chain.",
    rejected:
      "Wallet disconnections cause data loss or interrupted gameplay, frustrating players.",
  },
  {
    prompt: "Can I play without a wallet?",
    accepted:
      "No, a Base-compatible wallet is required to interact with the platform and games.",
    rejected:
      "Yes, but your gameplay is restricted to guest mode with no real bets or rewards.",
  },
  {
    prompt: "Are there tutorials for first-time users?",
    accepted:
      "Yes, the platform offers tutorials and interactive guides to walk you through wallet setup, deposits, and gameplay.",
    rejected:
      "No tutorials are available, leaving first-time users to figure things out on their own.",
  },
  {
    prompt: "How do I fund my wallet for the first time?",
    accepted:
      "You can fund your wallet by purchasing $BAMBOO from a DEX or transferring assets from another wallet.",
    rejected:
      "There are no clear instructions for funding wallets, causing confusion for new players.",
  },
  {
    prompt: "Is the wallet secure?",
    accepted:
      "Yes, the wallet uses industry-standard security measures like private keys and seed phrases to ensure player safety.",
    rejected:
      "The wallet has weak security, making it vulnerable to unauthorized access.",
  },
  {
    prompt: "Can I use multiple wallets during onboarding?",
    accepted:
      "No, you must choose one wallet to connect initially, but you can switch wallets later via the platform's settings.",
    rejected:
      "Yes, multiple wallets can be connected during onboarding, creating unnecessary complexity.",
  },
  {
    prompt: "What if I lose access to my wallet during onboarding?",
    accepted:
      "You'll need to recover your wallet using your seed phrase or private key.",
    rejected:
      "Wallet recovery is not supported, leaving you locked out if access is lost.",
  },
  {
    prompt: "Do I need to verify my identity during onboarding?",
    accepted:
      "No, onboarding is non-custodial and requires only wallet connection.",
    rejected:
      "Yes, identity verification is required, which can deter privacy-conscious players.",
  },
  {
    prompt: "How is $BAMBOO added to my wallet after onboarding?",
    accepted:
      "Once you acquire $BAMBOO, it will automatically appear in your wallet balance after the transaction confirms on-chain.",
    rejected:
      "$BAMBOO does not appear automatically, requiring manual addition of the token contract address.",
  },
  {
    prompt: "Can the wallet handle multi-sig transactions?",
    accepted:
      "Yes, advanced wallets can support multi-sig functionality for shared access and extra security.",
    rejected:
      "No, the wallet does not support multi-sig, limiting its use for advanced users or groups.",
  },
  {
    prompt: "Are gas fees required during onboarding?",
    accepted:
      "Yes, minimal gas fees are required for on-chain transactions, but the platform provides clear estimates before proceeding.",
    rejected:
      "Gas fees are hidden or unpredictable, leaving players unaware of transaction costs during onboarding.",
  },
];
