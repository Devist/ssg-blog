import { AxiosResponse } from 'axios'
import { APIRequest } from '@/network/APIRequest'
import { HTTPMethod } from '@/network/APIClient'
import { IUserData } from '@/entities'

export namespace UserAPI {
  // 베이스
  const USERS = 'user'

  // 유저 정보 가져오기
  export class Fetch implements APIRequest<IUserData> {
    response!: IUserData
    path: string
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor(id: number) {
      this.path = `${USERS}/${id}`
    }
  }
}
