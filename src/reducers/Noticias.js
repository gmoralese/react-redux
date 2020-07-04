const ADD_NEWS = 'news/add'

/*
*id
*nombre
*CATEGORY_ID
*/

export const addNews = payload => ({
  type: ADD_NEWS,
  payload: {
    ...payload,
    id: Math.random().toString(36)
  }
})

const initialState = {
  data: [] 
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEWS:
      return{
        ...state,
        data: [...state.data, action.payload]
      }
    default:
      return state
  }
}