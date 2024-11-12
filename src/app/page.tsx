import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-center justify-center p-4">
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        <Image
          src="/emerald.png?height=256&width=256"
          alt="Emerald"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <h1 className="mt-8 text-2xl md:text-3xl font-bold text-emerald-300 text-center">
        u r awesome, krishnaa
      </h1>
    </div>
  )
}