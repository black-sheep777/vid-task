import React, { useState, useEffect } from 'react'
import Header from 'components/header/Header'
import CallerCard from 'components/caller-card/CallerCard'

import Footer from 'components/footer/Footer'
import 'components/app/App.scss'
import RGL, { WidthProvider } from 'react-grid-layout'


const ReactGridLayout = WidthProvider(RGL)

type Layout = Array<object>

function App() {
  const [layout, setLayout] = useState<Layout>([])
  useEffect(()=>{
    const originalLayout = getFromLS('layout') || []
    setLayout(originalLayout)
  }, [])

  function getFromLS(key : string) {
    let ls 
    if (localStorage) {
      try {
        ls = JSON.parse(localStorage.getItem('callerGrids')  || '{}')
      } catch (e) {
        console.log('error')
      }
    }
    return ls[key]
  }

  function saveToLS(key : string, value : Array<object>) {
    if (localStorage) {
      localStorage.setItem(
        'callerGrids',
        JSON.stringify({
          [key]: value
        })
      )
    }
  }

  function onLayoutChange(currentLayout : Array<object>) {
    console.log(currentLayout)
    saveToLS('layout', currentLayout)
    setLayout( currentLayout )
  }
  return (
    <div className="App">
      <Header />
      <ReactGridLayout layout={layout} className="layout" cols={12} rowHeight={10} width={1200} onLayoutChange={onLayoutChange}>

        <div key="1" data-grid={{ w: 4, h:9, x: 0, y: 0 }}>
          <CallerCard photo="./profile-anonymous.jpg" name="Alex Baxter" />
        </div>

        <div key="2" data-grid={{ w: 4, h:9, x: 6, y: 0 }}>
          <CallerCard photo="./profile-anonymous.jpg" name="Jane Doe" />
        </div>


        <div key="3" data-grid={{ w: 3, h:10, x: 0, y: 8 }}>
          <CallerCard photo="./profile-anonymous.jpg" name="John Doe" />
        </div>

        <div key="4" data-grid={{ w: 3, h:10, x: 6, y: 8 }}>
          <CallerCard photo="./profile-anonymous.jpg" name="Will Smith" />
        </div>

      </ReactGridLayout>
      <Footer />
    </div>
  )
}

export default App
