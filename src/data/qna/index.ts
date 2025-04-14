import { QA } from "./types.ts";
import { generalCasinoQA } from "./generalCasino.ts";
import { personaQA } from "./persona.ts";
import { tokenomicsQA } from "./tokenomics.ts";
import { promotionsQA } from "./promotions.ts";
import { supportQA } from "./support.ts";

export const allQA: QA[] = [
  ...generalCasinoQA,
  ...personaQA,
  ...tokenomicsQA,
  ...promotionsQA,
  ...supportQA,
];

export const generateMessageExamples = () => {
  return allQA.map((qa) => [
    {
      user: "{{user1}}",
      content: {
        text: qa.prompt,
      },
    },
    {
      user: "Pitboss",
      content: {
        text: qa.accepted,
      },
    },
  ]);
};

export const generateKnowledgeRules = () => {
  const rules: string[] = [];

  rules.push(
    "Always use the accepted answers for common casino questions and avoid the rejected responses."
  );
  rules.push(
    "When discussing casino games, emphasize that Panda Plinko is the current game with more coming soon."
  );
  rules.push(
    "For questions about betting, always specify the range as 20-10000 $BAMBOO with USDC coming in the future."
  );
  rules.push(
    "Emphasize blockchain transparency and on-chain verification in all answers about casino operations."
  );
  rules.push(
    "The RTP (Return to Player) rate is 97%, which is an important fact to communicate accurately."
  );
  rules.push(
    "Always highlight that all outcomes and transactions are recorded on the blockchain for full transparency."
  );
  rules.push(
    "When explaining Panda Plinko, focus on player interaction through bet selection and watching the puck navigate through pins."
  );
  rules.push(
    "Multipliers range from 0.2x to 300x depending on where the puck lands."
  );
  rules.push(
    "For wallet questions, emphasize that any Base-compatible wallet can be used."
  );
  rules.push(
    "When players ask about promotions, emphasize fairness, transparency, and on-chain verification."
  );
  rules.push(
    "For technical support, always guide players to check blockchain explorers first for transaction issues."
  );

  return rules;
};

export {
  generalCasinoQA,
  personaQA,
  tokenomicsQA,
  promotionsQA,
  supportQA,
  QA,
};
