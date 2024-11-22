import path from 'path'
import fs from 'fs/promises'

type ProtocolAnalysis = {
  robotType: string
  // Add other expected fields if needed
}

interface Props {
  params: {
    analysisKey: string
  }
}

// Lookup table for JSON files based on keys
const analysisLookup: { [key: string]: string } = {
  a: '1731419888950.json',
}

async function getAnalysisData(analysisKey: string): Promise<ProtocolAnalysis | null> {
  const fileName = analysisLookup[analysisKey]
  if (!fileName) {
    return null // Invalid key
  }
  console.log('Loading analysis data:', fileName)

  const filePath = path.join(process.cwd(), 'src','app', 'components', fileName)

  try {
    const fileContent = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error(`Error loading JSON file: ${filePath}`, error)
    return null
  }
}

import { ProtocolDeckClient } from './ProtocolDeckClient'

export default async function DeckView({ params }: { params: { analysisKey: string } }) {
  const { analysisKey } = params

  try {
    const analysis = await getAnalysisData(analysisKey)
    return <ProtocolDeckClient analysis={analysis} />
  } catch (error) {
    console.error(`Error loading JSON file: ${analysisKey}`, error)
    return <h1>404 - Analysis Not Found</h1>
  }
}

