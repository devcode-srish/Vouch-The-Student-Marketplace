'use server';

/**
 * @fileOverview Generates a professional-looking product image from a description.
 *
 * - generateListingImage - A function that handles the image generation process.
 * - GenerateListingImageInput - The input type for the generateListingImage function.
 * - GenerateListingImageOutput - The return type for the generateListingImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateListingImageInputSchema = z.object({
  description: z.string().describe('The description of the product to generate an image for.'),
});
export type GenerateListingImageInput = z.infer<typeof GenerateListingImageInputSchema>;

const GenerateListingImageOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated image.'),
});
export type GenerateListingImageOutput = z.infer<typeof GenerateListingImageOutputSchema>;

export async function generateListingImage(input: GenerateListingImageInput): Promise<GenerateListingImageOutput> {
  return generateListingImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateListingImagePrompt',
  input: {schema: GenerateListingImageInputSchema},
  output: {schema: GenerateListingImageOutputSchema},
  prompt: `Generate a professional-looking product image based on the following description: {{{description}}}. The image should be suitable for use in an online listing.`,
});

const generateListingImageFlow = ai.defineFlow(
  {
    name: 'generateListingImageFlow',
    inputSchema: GenerateListingImageInputSchema,
    outputSchema: GenerateListingImageOutputSchema,
  },
  async input => {
    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: input.description,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image.');
    }

    return { imageUrl: media.url };
  }
);
