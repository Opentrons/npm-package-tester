import Image from 'next/image'
import type { ModuleModel } from '@opentrons/shared-data'

// Object map for module types and their image paths
const MODULE_IMAGES: Record<ModuleModel, string> = {
    absorbanceReaderV1: '/images/opentrons_plate_reader.png',
    heaterShakerModuleV1: '/images/heaterShakerModuleV1@3x.png',
    magneticModuleV1: '/images/magneticModuleV1@3x.png',
    magneticModuleV2: '/images/magneticModuleV2@3x.png',
    temperatureModuleV1: '/images/temperatureModuleV1@3x.png',
    temperatureModuleV2: '/images/temperatureModuleV2@3x.png',
    thermocyclerModuleV1: '/images/thermocyclerModuleV1@3x.png',
    thermocyclerModuleV2: '',
    magneticBlockV1: ''
}

// Function to get the image path for each module model
export function getModuleImage(model: ModuleModel): string {
    return MODULE_IMAGES[model] || ''
}

// Component to render a list of module types with their images
export default function ModuleTypeList() {
    return (
        <div style={{ textAlign: 'center', marginTop: '5px' }}>
            <h2 style={{ marginBottom: '10px' }}>Available Module Types</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px', // Adjust gap for closer spacing
                justifyItems: 'center',
                alignItems: 'center'
            }}>
                {Object.keys(MODULE_IMAGES).map((moduleType) => (
                    <div key={moduleType} style={{ textAlign: 'center' }}>
                        {/* Display the module name */}
                        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{moduleType}</p>
                        {/* Display the image if the path is valid */}
                        {getModuleImage(moduleType as ModuleModel) ? (
                            <Image
                                src={getModuleImage(moduleType as ModuleModel)}
                                alt={`${moduleType} image`}
                                width={100} // Adjust width and height as needed
                                height={100}
                                priority
                            />
                        ) : (
                            <p>Image not available</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
