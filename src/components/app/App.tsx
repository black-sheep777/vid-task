import React from 'react'
import Header from 'components/header/Header'
import CallerCard from 'components/caller-card/CallerCard'

import Footer from 'components/footer/Footer'
import 'components/app/App.scss'




function App() {
  return (
    <div className="App">
      <Header />
      <CallerCard photo="./profile-anonymous.jpg" name="Jane Doe" />
      <Footer />
    </div>
  )
}

export default App
