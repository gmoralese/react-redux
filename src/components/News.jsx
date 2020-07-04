import React, { Component } from 'react'
import NewsForm from './NewsForm'
import NewsList from './NewsList'

export default class News extends Component {
  handleSubmit = payload => {
    const { addNews, selectedCategory } = this.props
    addNews({...payload, categoryId: selectedCategory})
  }

  render() {
    const { news } = this.props
    return (
      <div>
        <NewsForm onSubmit={this.handleSubmit} />
        <NewsList news={news}/> 
      </div>
    )
  }
}