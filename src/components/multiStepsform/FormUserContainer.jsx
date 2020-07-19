import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FormUserDetail from './pages/FormUserDetail'
import FormProfileDetail from './pages/FormProfileDetail'
import FormUserPreferences from './pages/FormUserPreferences'

export class FormUserContainer extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1,
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { page } = this.state
    const { onSubmit } = this.props
    switch (page) {
      case 1:
        return (
          <FormUserDetail
            onSubmit={this.nextPage}
          />
        )
      case 2:
        return (
          <FormProfileDetail
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )
      case 3:
        return (
          <FormUserPreferences
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )
      default: 
      return page
    }
  }
}

FormUserContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FormUserContainer
