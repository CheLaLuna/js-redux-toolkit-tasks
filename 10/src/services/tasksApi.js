import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// BEGIN (write your solution here)
export const tasksApi = createApi({
  reducerPath: 'tasks',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
      getTasks: builder.query({
          query: () => '/tasks',
          providesTags: ['Task'],
      }),
      addTask: builder.mutation({
          query: (task) => ({
              url: '/tasks',
              method: 'POST',
              body: task,
          }),
          invalidatesTags: ['Task'],
      }),
      removeTask: builder.mutation({
          query: (id) => ({
              url: `/tasks/${id}`,
              method: 'DELETE',
          }),
          invalidatesTags: ['Task'],
      })
  })
});

export const { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation} = tasksApi;
// END
