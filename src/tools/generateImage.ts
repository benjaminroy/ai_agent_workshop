import type { ToolFn } from '../../types'
import { openai } from '../ai'
import { z } from 'zod'

export const generateImageToolDefinition = {
    name: 'generate_image',
    parameters: z.object({
        prompt: z.string().describe('The prompt to use to generate the image')
    }),
    description: 'generate an image',
}

type Args = z.infer<typeof generateImageToolDefinition.parameters>

export const generateImage: ToolFn<Args, string> = async ({ toolArgs, userMessage }) => {
    const res = await openai.images.generate({
        model: 'dall-e-3',
        prompt: toolArgs.prompt,
        n: 1,
        size: '1024x1024',
    })

    return res.data[0].url!;
}
