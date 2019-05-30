import { createSelector } from 'reselect';
import { IState } from '../todo/interfaces';
import { VisabilityList } from '../../../consts';

interface IStateToProps {
  todos: IState;
  visabilityFilter: string;
}

export const selectTodos = (state: IStateToProps) => {
  return Array.from(state.todos.todoById).map(el => el[1]);
};

export const selectVisabilityFilter = (state: IStateToProps) => {
  return state.visabilityFilter;
};

export const selectFilteredTodos = createSelector(
  selectTodos,
  selectVisabilityFilter,
  (todos, filter) => {
    switch (filter) {
      case VisabilityList.ALL:
        return todos;
      case VisabilityList.ACTIVE:
        return todos.filter(todo => !todo.completed);
      case VisabilityList.COMPLETED:
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }
);