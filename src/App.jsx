import { Route, Routes } from 'react-router-dom'
import './App.css'
import './assets/css/all.min.css'
import NavBar from './component/Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Blog from './Blog'
import Contact from './Contact'
import Sign from './Sign'
import Footer from './component/footer'
import Pricing from './Pricing'


function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/FirstProject/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/Sign' element={<Sign/>}/>
          </Routes>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
