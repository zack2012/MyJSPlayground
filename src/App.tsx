import React from 'react'

// import 'reset-css'
import './App.css'
import BeautifulCard from './components/Card'
import Login from './components/Login'
import GlassEffectCard from './components/GlassEffectCard'
import MagicMenu from './components/MagicMenu'
import Card from './components/Card'
import { TypeText } from './components/TypeText'
import { throttle } from 'lodash'

const testText = `
  <div class='bg-red'>Text is the most common form of content on the web. It’s used to convey information, tell a story, and engage users. In this module, you’ll learn how to style text with CSS, including how to use web fonts, how to align and format text, and how to style lists.</div>
  <h1>note: The CSS font properties are covered in the CSS Fonts module.</h1>
  <h2>what you’ll learn</h2>
  <h3>How to use web fonts</h3>
  <p>How to align and format text
  How to style lists
  <a>How to style text with CSS</a>
  YYY</p>
`

function App() {
  return (
    <TypeText message={testText}/>
  )
}

export default App
