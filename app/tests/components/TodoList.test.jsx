import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const todos = [
      {
        id: 1,
        text: 'Do it'
      },
      {
        id: 2,
        text: 'Do it, do it'
      }
    ];

    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty mesage if no todos', () => {
    const todos = [];

    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
