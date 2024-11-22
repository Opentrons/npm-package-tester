'use client'

import CowButton from './components/CowButton'
import ModuleTypeList from './components/ModuleList'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8">
      <title>🐄 Cow Button 🐄</title>
      <CowButton />
      <ModuleTypeList />
    </main>
  )
}
