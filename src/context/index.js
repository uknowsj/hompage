import { createContext, useReducer, useRef } from 'react'


const initialState = {
  language: {
    type: ['KOR','ENG'],
    selected: 'KOR'
  }
}

const Context = createContext({});

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGS':
      return {
        ...state,
        language: {
          ...state.language,
          selected: action.selected
        }
      }
    default :
      throw new Error('Unhandled Action');
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {state, dispatch};
  return <Context.Provider value={value}>{ children }</Context.Provider>
}

export {Context, Provider};