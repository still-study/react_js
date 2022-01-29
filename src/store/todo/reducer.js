


const initialState = {
  isChecked: false,
}

export const profileReducer = (state = initialState, action) => {
  switch (action?.type) {

    case "CHANGE_IS_CHECKED": {
      return {
        ...state,
        isChecked: !state.isChecked,
      }
    }
    default: {
      return state;
    }
  }
}