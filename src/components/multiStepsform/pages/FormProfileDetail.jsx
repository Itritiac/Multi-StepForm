import React from 'react';

import { Field, reduxForm } from 'redux-form';
import validate from '../../../common/validator/validate';
import { renderError, renderField } from '../FormControls';
import styles from './../multiStepsform.module.scss'
import { Button } from 'react-bootstrap';


const FormProfileDetail = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}
        className={styles.Form}
      >
        <h4>Enter Profile Details</h4>
        <Field
          className={styles.FormInput}
          name="occupation"
          type="text"
          component={renderField}
          label="Occupation"
        />
        <Field
          className={styles.FormInput}
          name="city"
          type="text"
          component={renderField}
          label="City"
        />
        <div>
          <div className={styles.radioInputs}>
            <label>
              <Field name="sex" component="input" type="radio" value="male" />
              {' '}
            Male
          </label>
            <label>
              <Field name="sex" component="input" type="radio" value="female" />
              {' '}
            Female
          </label>
            <label>
              <Field name="sex" component="input" type="radio" value="custom" />
              {' '}
            Custom
          </label>

            <Field name="sex" component={renderError} />
          </div>
        </div>
        <div className={styles.controlButtons}>
          <Button
            type="submit"
            onClick={previousPage}
          >
            Back
          </Button>
          <Button
            type="submit"

          >

            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'multisteps', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(FormProfileDetail);
