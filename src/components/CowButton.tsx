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

  return (
    <div style={{ position: 'relative', display: 'inline-block', textAlign: 'center' }}>
      {/* Display click count */}
      <div style={{ marginBottom: '10px', fontSize: '1.2rem', fontWeight: 'bold' }}>
        Clicks: {clickCount}
      </div>

      <PrimaryButton onClick={handleClick}>Cow Button</PrimaryButton>

      {/* Render all cow emojis under the button */}
      <div style={{ position: 'relative', marginTop: '20px' }}>
        {cows.map((cow, index) => (
          <span
            key={cow}
            className="cow-emoji"
            style={{
              position: 'absolute',
              top: '0',
              left: `${index * 20}px`, // Offset each cow slightly
              fontSize: '2.5rem',
              opacity: 1,
              animation: 'fade-out 1.5s forwards'
            }}
          >
            🐄
          </span>
        ))}
      </div>

      {/* CSS for the fade-out animation */}
      <style jsx>{`
        @keyframes fade-out {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </div>
  )
}
