import React from 'react';

import styles from './multiStepsform.module.scss'

export const renderField = ({ input, label, type, meta: { touched, error } }) => {
  const hasError = touched && error

  return (
    <div className={styles.FormInput + ' ' + (hasError ? styles.errorField : "")}>
      <input
        {...input}
        placeholder={label}
        type={type}
      />
      {hasError && <div className={styles.error}>{error}</div>}
    </div>
  )
}

export const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <div className={styles.radioError} >{error}</div> : false;

export const renderColorSelector = ({ input, meta: { touched, error } }) => {
  const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
  const hasError = touched && error

  return (
    <div className={styles.FormInput + ' ' + (hasError ? styles.errorField : "")}>
      <select {...input}>
        <option value="">Select a color...</option>
        {colors.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
      {hasError && <div className={styles.error}>{error}</div>}
    </div>
  )
}
