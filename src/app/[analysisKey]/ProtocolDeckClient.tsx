'use client'

import { ProtocolDeck } from '@opentrons/components'

export function ProtocolDeckClient({ analysis }: { analysis: { robotType: string } | null }) {
  if (!analysis) {
    return <div>Error: Analysis data is missing. Please check your input and try again.</div>
  }

  return (
    <ProtocolDeck
      protocolAnalysis={analysis as any}
      showLabwareInfo={true}
      baseDeckProps={{
        showSlotLabels: true,
        showExpansion: true,
        robotType: analysis.robotType as any,
      }}
    />
  )
}
