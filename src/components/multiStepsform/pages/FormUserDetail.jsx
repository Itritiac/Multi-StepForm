import React from 'react'

import { Field, reduxForm } from 'redux-form'
import validate from '../../../common/validator/validate'
import styles from './../multiStepsform.module.scss'
import { Button } from 'react-bootstrap'
import { renderField } from '../FormControls'

const FormUserDetail = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}
        className={styles.Form}
      >
        <h4>Enter User Details</h4>
        <Field
          className={styles.FormInput}
          name="firstName"
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          className={styles.FormInput}
          name="lastName"
          type="text"
          component={renderField}
          label="Last Name"
        />
        <Field
          className={styles.FormInput}
          name="email"
          type="email"
          component={renderField}
          label="Email"
        />
        <div className={styles.controlButtons}>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'multisteps', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(FormUserDetail)
