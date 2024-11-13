'use client'

import CowButton from '../components/CowButton'
import ModuleTypeList from '../components/ModuleList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <title>🐄 Cow Button 🐄</title>
      
      {/* Cow Button Component */}
      <CowButton />

      {/* Module Type List Component */}
      <ModuleTypeList />
    </main>
  )
}
