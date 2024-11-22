// components/CowButton.js
import { useState } from 'react'
import { PrimaryButton } from '@opentrons/components'
import { MouseEventHandler } from 'react'

interface CowButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function CowButton(props: CowButtonProps) {
  const [clickCount, setClickCount] = useState(0)
  const [cows, setCows] = useState<number[]>([])

  const handleClick = () => {
    setClickCount((prev) => prev + 1)
    setCows((prev) => [...prev, clickCount]) // Add a new cow for each click

    setTimeout(() => {
      setCows((prev) => prev.filter((cow) => cow !== clickCount)) // Remove cow after 1.5 seconds
    }, 1500)
    console.log('🐄')
  }

  // Helper function to generate random positions for the cows within a tighter bound
  const getRandomPosition = () => ({
    left: `${Math.random() * 80}%`,         // Random horizontal position within 80% of field width
    bottom: `${10 + Math.random() * 20}px`  // Tighter vertical position within 10-30px from the bottom
  })

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
      {/* Button and click count */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '5px', fontSize: '1.2rem', fontWeight: 'bold' }}>
          Clicks: {clickCount}
        </div>
        <PrimaryButton onClick={handleClick}>Cow Button</PrimaryButton>
      </div>

      {/* Field with spiky grass */}
      <div className="field">
        <div className="grass"></div>

        {/* Render cow emojis randomly in the field */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {cows.map((cow) => (
            <span
              key={cow}
              className="cow-emoji"
              style={{
                position: 'absolute',
                fontSize: '3rem',
                transform: 'translate(-50%, -50%)',
                ...getRandomPosition()
              }}
            >
              🐄
            </span>
          ))}
        </div>
      </div>

      {/* CSS for the spiky grass and field */}
      <style jsx>{`
        .field {
          position: relative;
          width: 400px;
          max-width: 100%;
          height: 120px;
          margin-top: 20px;
          background-color: #a8d5a2;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          border-top: 5px solid #6b8e23;
        }

        .grass {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 30px;
          background-color: #6b8e23;
          clip-path: polygon(0% 100%, 5% 50%, 10% 100%, 15% 50%, 20% 100%, 25% 50%, 30% 100%, 35% 50%, 40% 100%, 45% 50%, 50% 100%, 55% 50%, 60% 100%, 65% 50%, 70% 100%, 75% 50%, 80% 100%, 85% 50%, 90% 100%, 95% 50%, 100% 100%);
          animation: grass-wave 2s infinite alternate ease-in-out;
        }

        @keyframes grass-wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(5px);
          }
        }
      `}</style>
    </div>
  )
}
