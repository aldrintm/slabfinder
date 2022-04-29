import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ListAll from './pages/ListAll'
import About from './pages/About'
import Reserve from './pages/Reserve'
import NotFound from './pages/NotFound'
import Searchbar from './components/Searchbar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Table from './components/layout/Table'

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto pb-12 px-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listall' element={<ListAll />} />
            <Route path='/about' element={<About />} />
            <Route path='/Reserve' element={<Reserve />} />
            <Route path='/NotFound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
