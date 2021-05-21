import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import { getTodo, getTodos } from '../../api/todo';
import { useRecoilState } from 'recoil';
import axios from 'axios';

const triggerState = atomFamily({
  key: 'todo/triggerState',
  default: Date.now(),
});

export const todoState = atom({
  key: 'todo/todoState',
  default: null,
});

export const todoListState = atom({
  key: 'todo/todoListState',
  default: [],
});

// set을 통한 refetch가능한 request
export const todosQuery = selector({
  key: 'todo/todosQuery',
  get: async ({ get }) => {
    try {
      console.log('todo/todosQuery');
      get(triggerState('todo/todosQuery'));
      const response = await getTodos();
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  set: ({ set }, newValue) => {
    set(triggerState('todo/todosQuery'), Date.now());
  },
});

export const todoQuery = selectorFamily({
  key: 'todo/todoQuery',
  get:
    id =>
    async ({ get }) => {
      try {
        console.log('todo/todoQuery');
        get(triggerState('todo/todoQuery'));
        // const response = await getTodo(id);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todosa/${id}`);
        return response.data;
      } catch (error) {
        console.log('에러 발생', error);
        console.log('error.response.status', error?.response?.status);
        throw error;
      }
    },
  set:
    () =>
    ({ set }, newValue) => {
      set(triggerState('todo/todoQuery'), Date.now());
    },
});

export function useTodo() {
  const [todo, setTodo] = useRecoilState(todoState);

  return { todo, setTodo };
}
