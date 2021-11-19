/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTPMethod } from '@/network/APIClient'

export type APIRequest<R> = {
  response: R
  path: string
  method: HTTPMethod
  params?: any
  baseURL?: string
  parse?: (data: any) => R
  header?: any
}
