import React , { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class CategoryForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" component="input" placeholder='Categoria'/>
      </form>
    )
  }
}

export default reduxForm({
  form: 'category'
})(CategoryForm)