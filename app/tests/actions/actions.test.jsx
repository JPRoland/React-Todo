import expect from 'expect';
const actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    const res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'Some text'
    };
    const res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action',() => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 37
    };
    const res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });

  it('should generate toggle showCompleted action', () => {
    const action = {type: 'TOGGLE_SHOW_COMPLETED'};
    const res = actions.toggleShowCompleted(action);

    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
    const todos = [{
      id: '111',
      text: 'Anything',
      completed: false,
      completedAt: undefined,
      createdAt: 28000
    }];
    const action = {
      type: 'ADD_TODOS',
      todos
    };
    const res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });
});
