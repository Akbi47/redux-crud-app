import { createSelector } from "@reduxjs/toolkit"

export const todoListSelector = (state) => state.todoList
export const searchTextSelector = (state) => state.filters.search
export const filterStatusSelector = (state) => state.filters.status
export const filterPrioritiesSelector = (state) => state.filters.priority


export const todosRemainingSelector = createSelector(todoListSelector, filterStatusSelector, filterPrioritiesSelector, searchTextSelector,
  (todo, status, priorities, searchText) => {
    return todo.filter((todoList) => {
      if (status === 'All') {
        return priorities.length
          ? (todoList.name.includes(searchText) && priorities.includes(todoList.priority))
          : todoList.name.includes(searchText);
      }
      return (
        todoList.name.includes(searchText)
        && (status === 'Completed' ? todoList.completed : !todoList.completed)
        && (priorities.length ? (priorities.includes(todoList.priority)) : true)
      )
    });
  })