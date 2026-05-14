import PlayerForm from "./components/PlayerForm"
import  Navbar from "./components/Navbar"
import { use, useState } from "react"

function App() {

    const [PlayerList,setPlayerList] = useState ([])
    const [NamePlayer,setNamePlayer] = useState ("")

    function AddPlayer(){
         setPlayerList(
            [...PlayerList, NamePlayer]
                     )      
    }
   
    return(
        
        <div className="bg-zinc-950 min-h-screen text-white"> 
             <Navbar/>
             <div className="max-w-7xl mx-auto px-6 mt-10">
                <PlayerForm/>
             </div>
        </div>
       
    )
}
export default App