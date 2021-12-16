import { IPostData } from '@/entities'
import { mockPostRepository } from './posts.mock'
import { IPostRepositoryMock } from './posts.types'

describe('>>> POSTS REPOSITORY', () => {
  describe('>> fetchItems', () => {
    it('모두 가져오기, 배열의 특정 요소가 IPostData 타입이어야 합니다.', async () => {
      const repository: IPostRepositoryMock = mockPostRepository()

      await repository.fetchItems().then((result: IPostData[]) => {
        expect(result[0].id).not.toBeUndefined()

        expect(typeof result[0].id).toBe('number')
        expect(typeof result[0].title).toBe('string')
        expect(typeof result[0].body).toBe('string')
        expect(typeof result[0].userId).toBe('number')
      })
    })

    it('페이징으로 가져오기, 포스팅 갯수가 페이지당 보여줄 개수와 동일해야 합니다.', async () => {
      const repository: IPostRepositoryMock = mockPostRepository()
      const pagination: IPaginationRequest = {
        _limit: 5,
        _page: 1
      }
      await repository.fetchItems(pagination).then((result) => {
        console.log(result)
        expect(result.length).toBe(pagination._limit)
      })
    })
  })
  describe('>> saveItem', () => {
    it('모두 가져오기, 배열의 특정 요소가 IPostData 타입이어야 합니다.', async () => {
      const repository: IPostRepositoryMock = mockPostRepository()

      await repository.fetchItems().then((result: IPostData[]) => {
        expect(result[0].id).not.toBeUndefined()

        expect(typeof result[0].id).toBe('number')
        expect(typeof result[0].title).toBe('string')
        expect(typeof result[0].body).toBe('string')
        expect(typeof result[0].userId).toBe('number')
      })
    })

    it('페이징으로 가져오기, 포스팅 갯수가 페이지당 보여줄 개수와 동일해야 합니다.', async () => {
      const repository: IPostRepositoryMock = mockPostRepository()
      const pagination: IPaginationRequest = {
        _limit: 5,
        _page: 1
      }
      await repository.fetchItems(pagination).then((result) => {
        console.log(result)
        expect(result.length).toBe(pagination._limit)
      })
    })
  })
})
