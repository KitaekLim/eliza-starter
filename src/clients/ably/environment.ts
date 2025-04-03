import { IAgentRuntime } from "@elizaos/core";
import { z } from "zod";

export const ablyEnvSchema = z.object({
  ABLY_API_KEY: z.string().min(1, "Ably API key is required"),
  SERVER_PORT: z.string().default("3000"),
});

export type AblyConfig = z.infer<typeof ablyEnvSchema>;

export async function validateAblyConfig(
  runtime: IAgentRuntime
): Promise<AblyConfig> {
  try {
    const config = {
      ABLY_API_KEY: runtime.getSetting("ABLY_API_KEY"),
      SERVER_PORT: process.env.SERVER_PORT || "3000",
    };
    return ablyEnvSchema.parse(config);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join("\n");
      throw new Error(
        `Ably configuration validation failed:\n${errorMessages}`
      );
    }
    throw error;
  }
}
