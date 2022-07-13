import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import { App } from './App'

const Index = () => {
  return (
    <>
      <section>
        <h1>React Hook Form</h1>
        <App />
      </section>
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Index />, rootElement)
