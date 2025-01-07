import Header from "./Component/Header"
import PopArtist from "./Component/PopArtist"
import YourLibrary from "./Component/YourLibrary"


function App() {
  

  return (
    <>
     <Header/>
     <div className="flex">
     <YourLibrary/>
     <PopArtist/>
     </div>
    </>
  )
}

export default App
