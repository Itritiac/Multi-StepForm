import React from 'react'
import { Redirect } from 'react-router-dom'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  let info = JSON.stringify(values, null, 2)
  console.log(values)


  return (
    
    <div>
      <Redirect to='/target'/>
      {alert(info)}
      </div>
  )
})

