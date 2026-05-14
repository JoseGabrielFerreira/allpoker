function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-wide">
          ALL<span className="text-red-500">POKER</span>
        </h1>

        <nav className="flex items-center gap-6">

          <a href="#" className="text-zinc-400 hover:text-white transition">
            Dashboard
          </a>

          <a href="#" className="text-zinc-400 hover:text-white transition">
            Jogadores
          </a>

          <a href="#" className="text-zinc-400 hover:text-white transition">
            Ranking
          </a>

          <button className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-lg font-medium">
            Nova Mesa
          </button>

        </nav>

      </div>
    </header>
  )
}

export default Navbar