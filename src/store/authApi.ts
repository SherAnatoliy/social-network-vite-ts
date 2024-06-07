import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {baseUrl} from "../../utils/baseUrl"

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl:baseUrl }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})
export const  {useGetPokemonByNameQuery} = pokemonApi