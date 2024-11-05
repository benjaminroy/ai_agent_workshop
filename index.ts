import 'dotenv/config'
import { runAgent } from './src/agent'
import { tools } from './src/tools'
import { z } from 'zod'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

const weaterTool = {
  name: 'get_weather',
  description: 'use this tool to get the weather',
  parameters: z.object({})
}

const response = await runAgent({ userMessage, tools})

console.log(response)
