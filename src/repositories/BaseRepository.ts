type BaseRepository = {
  fetchItem?: (id: number) => Promise<any>
  fetchItems?: (params?: any) => Promise<any>
  saveItem?: (params: any) => void
  saveItems?: (params: any) => void
  getItem?: () => any
  getItems?: () => any
  clearItem?: () => void
  clearItems?: () => void
}

export default BaseRepository
