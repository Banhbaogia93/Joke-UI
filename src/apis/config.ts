import axios from 'axios'
import type { Method, AxiosRequestHeaders, AxiosRequestTransformer, AxiosInstance } from 'axios'

interface TAxiosApi {
  headers?: AxiosRequestHeaders
  method?: Method | string
  transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[]
  params?: any
}

const apiUrl = process.env.NODE_API_PROD ?? 'http://localhost:3002/api'

export const axiosApi = ({ headers, method, transformRequest, params }: TAxiosApi): AxiosInstance =>
  axios.create({
    baseURL: apiUrl,
    headers,
    method,
    transformRequest,
    params
  })
