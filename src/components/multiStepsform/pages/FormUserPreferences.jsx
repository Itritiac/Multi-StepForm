import React from 'react'

import { Field, reduxForm } from 'redux-form'
import validate from '../../../common/validator/validate'
import { renderColorSelector } from '../FormControls'
import styles from './../multiStepsform.module.scss'
import { Button } from 'react-bootstrap'


const FormUserPreferences = props => {
  const { handleSubmit, previousPage, pristine, submitting } = props
  return (
    <div>
      <form
        className={styles.Form}
        onSubmit={handleSubmit}
      >
        <h4>Enter User Details</h4>
        <div>

          <Field
            className={styles.FormInput}
            name="favoriteColor"
            component={renderColorSelector}
          />
        </div>
        <div className={styles.emploidCheckbox}>
          <label htmlFor="employed">Employed</label>
          <div>
            <Field
              name="employed"
              id="employed"
              component="input"
              type="checkbox"
            />
          </div>
        </div>
        <div>
          <Field
            className={styles.FormInput}
            name="notes"
            component="textarea"
            placeholder="Notes" />
        </div>
        <div className={styles.controlButtons}>
          <Button type="button" className="previous" onClick={previousPage}>
            Previous
        </Button>
          <Button type="submit" disabled={pristine || submitting}>Submit</Button>
        </div>
      </form>
    </div >
  )
}

export default reduxForm({
  form: 'multisteps', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(FormUserPreferences)
