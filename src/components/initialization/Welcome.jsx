import React from 'react'

import { Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './welcome.module.scss'

const Welcome = () => {
  return (
    <Jumbotron className={styles.jumbotronComponent}>
      <h1>Hello!</h1>
      <p>
        This is a simple app, were I learn to create different types of forms
      </p>
      <Link to="/multi-stepsform">
        <Button variant="primary">Please Enjoy</Button>
      </Link>
    </Jumbotron>
  )
}

export default Welcome
