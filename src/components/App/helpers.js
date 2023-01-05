export const handleMessageTodoListEmpty = (
  todosLength,
  filteredTodosLength,
  filterStatus
) => {
  const allListEmpty = `your to-do list is empty! now you can add your next task!`;
  const completedListEmpty = `Congratulations! you don't have any pending tasks, you are up to date!`;
  const activeListEmpty = `At the moment you don't have active tasks!`;

  if (filterStatus === 'all' && todosLength === 0) return allListEmpty;

  if (filterStatus === 'completed' && filteredTodosLength === 0)
    return completedListEmpty;

  if (filterStatus === 'active' && filteredTodosLength === 0)
    return activeListEmpty;

  return null;
};

export const handleModalDialog = (modalStatus) => {
  const { modalType } = modalStatus;

  const deleteTodoMessage = 'Are you sure you want to delete this todo?';
  const clearTodosMessage =
    'Are you sure you want to delete all completed todos?';

  if (modalType === 'deleteTask') return deleteTodoMessage;
  if (modalType === 'clearCompleted') return clearTodosMessage;
};
