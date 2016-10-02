import React from 'react';
import TodoList from 'TodoList';

const TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Take out trash'
        },
        {
          id: 4,
          text: 'Start smoker'
        },
        {
          id: 5,
          text: 'Smoke ribs'
        }
      ]
    };
  },
  render: function () {
    const {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
