/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { IApiResponse } from './APIResponse'
import { APIRequest } from './APIRequest'
import { IApiError } from './APIError'

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
}

export class APIClient {
  static shared = new APIClient()

  // URL 설정
  baseDomain = process.env.REACT_APP_BASE_API_URL
  baseURL = `${this.baseDomain}`

  // Timeout 설정
  timeout: number = 15 * 1000

  request<T extends IApiResponse>(request: APIRequest<T>): Promise<T> {
    const isRead = request.method === HTTPMethod.GET

    // console.log(`=======================================`)
    // console.log(`🎉 API 요청 : ${request.path}`)
    // console.log('🎉 params :', request.params)

    return new Promise<T>((resolve, reject) => {
      axios
        .request({
          url: request.path,
          method: request.method,
          params: isRead && request.params,
          data: !isRead && request.params,
          withCredentials: true,
          timeout: this.timeout,
          baseURL: request.baseURL || this.baseURL,
          // headers: this.createHeaders(!isRead && request.path.includes('auth/')),
          headers: request.path.includes('data/')
            ? APIClient.createHeaders(request.header)
            : APIClient.createHeaders()
        })
        .then((result) => {
          // console.log(request)
          const response = request.parse
            ? request.parse(result)
            : APIClient.parse<T>(result)

          // 디버깅용
          console.log('🎉 API 응답 :', response)
          console.log(`=======================================`)

          resolve(response)
        })
        .catch((err) => {
          const apiError = APIClient.normalizeError(err)

          reject(apiError)
        })
    })
  }

  // Default parser
  private static parse<T extends IApiResponse>(data: any): T {
    return data
  }

  // Convert axios error into APIError
  private static normalizeError(error: any): IApiError {
    return {
      code: error.response && error.response.status,
      message: error.message,
      raw: error
    }
  }

  // Create headers
  private static createHeaders(header: any = null): any {
    if (header) {
      return header
    }
    return {
      'Content-Type': 'application/json'
    }
  }

  // private toFormData(form: any) {
  //   const formdata = new FormData()

  //   // formdata에 각각의 input의 value를 추가
  //   for (const attr in form) {
  //     console.log("attr", attr)
  //     console.log("attr", form[attr])
  //     formdata.append(attr, form[attr])
  //   }
  //   console.log("formdata:", formdata)
  //   return formdata
  // }
}
