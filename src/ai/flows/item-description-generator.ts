'use server';

/**
 * @fileOverview AI-powered item description generator for seller listings.
 *
 * - generateItemDescription - A function that generates an item description from a prompt.
 * - GenerateItemDescriptionInput - The input type for the generateItemDescription function.
 * - GenerateItemDescriptionOutput - The return type for the generateItemDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateItemDescriptionInputSchema = z.object({
  prompt: z.string().describe('A prompt describing the item.'),
});
export type GenerateItemDescriptionInput = z.infer<
  typeof GenerateItemDescriptionInputSchema
>;

const GenerateItemDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated item description.'),
});
export type GenerateItemDescriptionOutput = z.infer<
  typeof GenerateItemDescriptionOutputSchema
>;

export async function generateItemDescription(
  input: GenerateItemDescriptionInput
): Promise<GenerateItemDescriptionOutput> {
  return generateItemDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateItemDescriptionPrompt',
  input: {schema: GenerateItemDescriptionInputSchema},
  output: {schema: GenerateItemDescriptionOutputSchema},
  prompt: `You are an expert copywriter specializing in writing compelling item descriptions.

  Generate a detailed and engaging description for the item based on the following prompt:
  {{{prompt}}}
  `,
});

const generateItemDescriptionFlow = ai.defineFlow(
  {
    name: 'generateItemDescriptionFlow',
    inputSchema: GenerateItemDescriptionInputSchema,
    outputSchema: GenerateItemDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
