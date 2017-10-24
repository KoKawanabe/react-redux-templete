import React from 'react'
import {render} from 'react-dom'
import { connect } from 'react-redux'
import SearchField from '../SearchField'
import './index.scss'

function Top(props){
  const { text } = props
  return (
    <div>
      <SearchField />
      <div>検索ワード：{text}</div>
    </div>
  )
}

export default connect(
  (state) => ({
    text: state.app.search.form.text
  }),
  (dispatch) => ({
  }),
)(Top)