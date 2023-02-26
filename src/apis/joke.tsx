import { axiosApi } from './config'

export const getAllJokes: any = async () =>
  await axiosApi({})
    .get('/jokes')

export const getJoke: any = async (jokeId: string) =>
  await axiosApi({})
    .get(`/jokes/${jokeId}`)
