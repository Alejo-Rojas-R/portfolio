import { Body } from "./components/Body"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"

function App() {

    return (
        <div className='bg-white'>
            <div className=''>
                <NavBar />
                <Body />
                <Footer />
            </div>
        </div>
    )
}

export default App
