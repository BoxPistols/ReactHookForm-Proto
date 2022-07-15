import React from 'react'
import { RHF } from './RHF'

import './styles.css'

export const App = () => {
  return (
    <>
      {/* <RHF label="ラベル" onClickButton={() => console.log('onClickButton')} /> */}
      <RHF label="ラベル" onClick={() => console.log('onClick!')} />
    </>
  )
}
