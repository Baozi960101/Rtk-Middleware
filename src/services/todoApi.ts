import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ApiType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export const todoApiServices = createApi({
  reducerPath: "todoApiServices",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTodoList: builder.query<ApiType, string>({
      query: (id) => `todos/${id}`,
    }),
  }),
});

export const { useGetTodoListQuery } = todoApiServices;
