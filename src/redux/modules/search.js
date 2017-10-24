import { createAction, handleActions } from 'redux-actions'

/**
 * Action types
 */
const SEARCH = 'bismarck/search/'

const SEARCH_FORM = SEARCH + 'form/'
const CHANGE_SEARCH_FORM = SEARCH_FORM + 'change'

/**
 * Action creator
 */
export const changeSearchForm = createAction(CHANGE_SEARCH_FORM)

/**
 * Initial state
 */
const INITIAL_STATE = {
  form: {
    text: '',
    condition: {},
  },
}

export default handleActions({
  [CHANGE_SEARCH_FORM]: (state, { payload }) => ({
    ...state,
    form: {
      ...state.form,
      text: payload,
    },
  }),
}, INITIAL_STATE)
