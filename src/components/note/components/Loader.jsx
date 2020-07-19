import React from 'react'

import preloader from './../../../assets/infinity.svg'

export const Loader = () => {
  return (
    <div>
      <img className="preloader" src={preloader} alt="loader"/>
    </div>
  )
}