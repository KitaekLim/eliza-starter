import { QA } from "./types";

export const tokenomicsQA: QA[] = [
  {
    prompt: "Why is the casino built on the Base blockchain?",
    accepted:
      "Base offers low fees, high throughput, and robust developer support, making it an ideal choice for on-chain gaming.",
    rejected:
      "The Base blockchain was chosen randomly without any specific benefits.",
  },
  {
    prompt: "What are the tokenomics of $BAMBOO?",
    accepted:
      "All $BAMBOO tokens were minted at launch on June 25, 2024, with liquidity locked for one year, a renounced contract, zero buy/sell tax, and no allocation to KOLs.",
    rejected:
      "The tokenomics are complex and not clear; it depends on external factors and changes frequently.",
  },
  {
    prompt: "Is $BAMBOO inflationary or deflationary?",
    accepted:
      "It's fixed supply. All $BAMBOO was minted at launch, making it a scarce and valuable resource.",
    rejected: "$BAMBOO is inflationary with no limit on supply.",
  },
  {
    prompt: "Are there any other tokens in the Bamboo on Base ecosystem?",
    accepted:
      "Currently, $BAMBOO is the sole token, but more innovations may come as the community grows.",
    rejected:
      "Yes, there are many tokens, but we don't have details or transparency about them.",
  },
  {
    prompt: "What is the $BAMBOO contract address?",
    accepted:
      "The $BAMBOO token contract address is [insert address here], publicly available and verifiable on the Base blockchain.",
    rejected:
      "The contract address is not disclosed or cannot be verified, causing confusion and mistrust.",
  },
  {
    prompt: "How is the liquidity for $BAMBOO managed?",
    accepted:
      "Liquidity is locked for one year to ensure trust and stability in the ecosystem.",
    rejected:
      "Liquidity is unmanaged, leading to potential price volatility and loss of trust.",
  },
  {
    prompt: "Are there buy or sell taxes on $BAMBOO?",
    accepted:
      "There are no buy or sell taxes on $BAMBOO, allowing seamless trading and better user experience.",
    rejected:
      "High buy or sell taxes are imposed, making it less attractive for users to participate in the ecosystem.",
  },
  {
    prompt: "Can $BAMBOO be minted or burned?",
    accepted:
      "No, $BAMBOO is a fixed supply token with no minting or burning mechanisms, ensuring scarcity.",
    rejected:
      "$BAMBOO can be minted or burned arbitrarily, reducing confidence in its tokenomics.",
  },
  {
    prompt: "How does $BAMBOO benefit players?",
    accepted:
      "Players can use $BAMBOO to place bets, earn rewards, and participate in community staking for shared profits.",
    rejected:
      "$BAMBOO has no clear utility for players beyond being a standard currency.",
  },
  {
    prompt: "What happens to unused $BAMBOO in the casino?",
    accepted:
      "Unused $BAMBOO remains in the community bankroll, supporting payouts and game operations transparently.",
    rejected:
      "Unused $BAMBOO is taken out of circulation with no explanation, creating trust issues.",
  },
  {
    prompt: "How does staking $BAMBOO work?",
    accepted:
      "Players can stake $BAMBOO to participate in the community bankroll, earning a share of profits or taking on risk with zero-margin games.",
    rejected:
      "Staking has no rewards or clear benefits, making it an unattractive feature.",
  },
  {
    prompt: "Why is $BAMBOO a memecoin?",
    accepted:
      "$BAMBOO was launched as a memecoin to create a fun and engaging community while still providing real utility in the casino ecosystem.",
    rejected:
      "$BAMBOO is just a joke token with no underlying utility or ecosystem value.",
  },
  {
    prompt: "Can $BAMBOO's price increase?",
    accepted:
      "Yes, as game popularity grows, demand for $BAMBOO could increase, driving up its price due to its fixed supply.",
    rejected:
      "$BAMBOO's price is stagnant or unstable with no clear correlation to ecosystem growth.",
  },
  {
    prompt: "How is $BAMBOO stored and accessed?",
    accepted:
      "$BAMBOO is stored securely in user wallets and accessed via the Base blockchain, ensuring full control for players.",
    rejected:
      "$BAMBOO can only be accessed through third-party services, reducing player control and transparency.",
  },
  {
    prompt: "Can $BAMBOO be traded on other platforms?",
    accepted:
      "Yes, $BAMBOO can be traded on decentralized exchanges supporting Base blockchain tokens.",
    rejected:
      "$BAMBOO is restricted to the casino, limiting its broader usability or tradeability.",
  },
  {
    prompt: "What is the relationship between $BAMBOO and casino games?",
    accepted:
      "$BAMBOO is the primary token used for betting, rewards, and staking within the casino, aligning the token with every part of the ecosystem.",
    rejected:
      "$BAMBOO is disconnected from the games and has no direct role in the casino's operations.",
  },
];
