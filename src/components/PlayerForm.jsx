function PlayerForm() {
    return(
        <div className="flex items-center gap-4 mt-10">

            <input
                className="bg-zinc-900 border border-zinc-800 px-5 py-3 w-80 rounded-lg font-medium text-white outline-none placeholder-zinc-500"
                placeholder="Digite o nome do jogador"
            />

            <button
                className="bg-red-600 hover:bg-red-700 transition px-5 py-3 rounded-lg font-medium text-white"
            >
                Adicionar Jogador
            </button>

        </div>
    )
}

export default PlayerForm