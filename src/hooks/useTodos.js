import { useState, useEffect, useCallback } from 'react';
import apiHandler from '../api';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch todos from API
  const fetchTodos = useCallback(async () => {
    setLoading(true);

    try {
      const response = await apiHandler({
        endpoint: 'todos',
        method: 'GET',
      });

      if (response.isError) {
        setTodos([]);
        setLoading(false);
        return;
      }

      // Simulate loading delay for better UX
      setTimeout(() => {
        setTodos(response || []);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching todos:', error);
      setTodos([]);
      setLoading(false);
    }
  }, []);

  // Add new todo
  const addTodo = useCallback(async (todoData) => {
    try {
      const response = await apiHandler({
        endpoint: 'todos',
        method: 'POST',
        body: todoData,
      });

      if (!response.isError) {
        setTodos((prevTodos) => [response, ...prevTodos]);
        return { success: true };
      }
      return { success: false };
    } catch (error) {
      console.error('Error adding todo:', error);
      return { success: false, error };
    }
  }, []);

  // Update todo (toggle completion)
  const updateTodo = useCallback(
    async (id) => {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (!todoToUpdate) return { success: false };

      const updatedTodo = {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      };

      try {
        const response = await apiHandler({
          endpoint: `todos/${id}`,
          method: 'PUT',
          body: updatedTodo,
        });

        if (!response.isError) {
          setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? response : todo))
          );
          return { success: true };
        }
        return { success: false };
      } catch (error) {
        console.error('Error updating todo:', error);
        return { success: false, error };
      }
    },
    [todos]
  );

  // Delete single todo
  const deleteTodo = useCallback(async (id) => {
    try {
      const response = await apiHandler({
        endpoint: `todos/${id}`,
        method: 'DELETE',
      });

      if (!response.isError) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        return { success: true };
      }
      return { success: false };
    } catch (error) {
      console.error('Error deleting todo:', error);
      return { success: false, error };
    }
  }, []);

  // Clear all completed todos
  const clearCompletedTodos = useCallback(async () => {
    const completedTodos = todos.filter((todo) => todo.completed);

    if (completedTodos.length === 0) {
      return { success: true };
    }

    try {
      // Delete all completed todos from server
      const deletePromises = completedTodos.map((todo) =>
        apiHandler({
          endpoint: `todos/${todo.id}`,
          method: 'DELETE',
        })
      );

      await Promise.all(deletePromises);

      // Update local state
      setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
      return { success: true };
    } catch (error) {
      console.error('Error clearing completed todos:', error);
      return { success: false, error };
    }
  }, [todos]);

  // Initialize data on mount
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return {
    todos,
    loading,
    addTodo,
    updateTodo,
    deleteTodo,
    clearCompletedTodos,
    refetchTodos: fetchTodos,
  };
};
