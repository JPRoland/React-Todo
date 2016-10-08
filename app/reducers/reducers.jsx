import uuid from 'node-uuid';
import moment from 'moment';

export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    // add case for TOGGLE_TODO, match action id and negate completed and update completedAt
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          const nextCompleted = !todo.completed;

          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          };
        }
      });
    default:
      return state;
  }
};