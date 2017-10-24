import React from 'react'
import { connect } from 'react-redux'
import './styles.css'
import { changeSearchForm } from '../../redux/modules/search'

function SearchField(props){
  const { search, handleChangeSearchForm } = props
  return (
    <div>
      <input type="text" onChange={(e) => handleChangeSearchForm(e.target.value)} value={search.form.text}/>
    </div>
  )
}

export default connect(
  (state) => ({
    search: state.app.search
  }),
  (dispatch) => ({
    handleChangeSearchForm: (text) => dispatch(changeSearchForm(text)),
  }),
)(SearchField)