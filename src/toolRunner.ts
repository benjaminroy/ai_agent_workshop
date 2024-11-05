import type OpenAI from "openai"
import { generateImage, generateImageToolDefinition } from './tools/generateImage'

const getWeather = () => `hot, 90deg`

export const runTool = async (
    toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall,
    userMessage: string
 ) => {
    const input = {
        userMessage,
        toolArgs: JSON.parse(toolCall.function.arguments || '{}'),
    }

    switch (toolCall.function.name) {
        case 'generate_image':
            return generateImage(input)
        case 'get_weather':
            return getWeather()
        default:
            throw new Error(`Unknow tool...`)
    }
}
