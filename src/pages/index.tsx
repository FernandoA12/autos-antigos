import Image from 'next/image'
import dynamic from 'next/dynamic'

const Map = dynamic(
  () => import('../components/Map').then((component) => component.Map),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col bg-secondary">
      <header className="w-full flex items-center gap-4 overflow-hidden bg-white shadow px-6 py-4">
        <div className="relative w-16 h-16 overflow-hidden">
          <Image fill src="/logo.png" alt="logo" className="object-cover" />
        </div>
        <h1 className="text-xl">Guia do evento</h1>
      </header>
      <section className="flex flex-1">
        <Map />
      </section>
    </main>
  )
}
