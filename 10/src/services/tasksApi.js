import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// BEGIN (write your solution here)
const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
      getTasks: builder.query({
        query: () => '/tasks',
      }),
      addTask: builder.mutation({
        query: (newTask) => ({
          url: '/tasks',
          method: 'POST',
          body: newTask,
        }),
      }),
      deleteTask: builder.mutation({
        query: (id) => ({
          url: `/tasks/${id}`,
          method: 'DELETE',
        }),
      }),
    }),
  });
  
  export const { useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation } = tasksApi;
  export default tasksApi;
// END
