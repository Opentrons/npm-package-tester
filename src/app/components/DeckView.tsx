import { ProtocolDeck } from '@opentrons/components'
import analysis from './1731419888950.json'


  const DeckMap = (
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
export default function DeckView() {
    return (
        <div>
        {DeckMap}
        </div>
    )
    }