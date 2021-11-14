/* eslint-disable @typescript-eslint/no-explicit-any */

type BaseRepository = {
  createOrUpdate?: (params: any) => Promise<any>
  create?: (params: any) => Promise<any>
  fetchAll?: (params?: any) => Promise<any>
  fetch?: (params?: any) => Promise<any>
  updateAll?: (params: any) => void
  update?: (params: any) => Promise<any>
  deleteAll?: (params: any) => void
  delete?: (params: any) => void
}

export default BaseRepository
