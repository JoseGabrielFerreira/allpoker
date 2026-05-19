import Navbar from "./components/Navbar"

function App() {
    return(
        <div className="bg-zinc-950 min-h-screen text-white">
            
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-20">

                {/* HERO SECTION */}
                <section className="flex flex-col items-center text-center">

                    <h1 className="text-5xl font-bold max-w-3xl leading-tight">
                        Gerencie suas mesas de poker de forma profissional
                    </h1>

                    <p className="text-zinc-400 mt-6 max-w-2xl text-lg">
                        Organize jogadores, controle buy-ins, acompanhe lucros
                        e tenha uma experiência moderna para suas sessões de poker.
                    </p>

                    {/* BOTÕES */}
                    <div className="flex gap-4 mt-10">

                        <button className="bg-red-900 hover:bg-red-800 hover:scale-105 transition px-10 py-3 rounded-xl font-semibold">
                            Entrar
                        </button>

                        <button className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:scale-105 transition px-6 py-3 rounded-xl font-semibold">
                            Criar Conta
                        </button>

                    </div>

                </section>

            </main>

        </div>
    )
}

export default App