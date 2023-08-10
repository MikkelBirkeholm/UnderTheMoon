import './App.css'
import { Hero } from './components/Hero/Hero'
import { ImageGrid } from './components/ImageGrid/ImageGrid'
import Info from './components/Info/Info'
import NavBar from './components/NavBar/navBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Info />
      <ImageGrid />
      <Footer />
    </>
  )
}

export default App
