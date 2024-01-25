import './App.css'
import { Footer, Header, Possibility, Feature, WhatGPT3, Blog} from './containers'
import {Brand, CTA, Navbar  } from './components'
function App() {

  return (
    <div className = 'App'>
      <div className = "gradient__bg">
      <Navbar />
      <Header />
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer />
    </div>
  )
}

export default App
