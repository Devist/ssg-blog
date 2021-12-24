import { PostsService } from '.'
import { mockPostsRepository } from '@/repositories'
import { mockCommentsRepository } from '@/repositories'
import { Post } from '@/entities'

describe('>>> POST SERVICE', () => {
  describe('>> fetchMore()', () => {
    it('>> 더 이상 데이터가 없는 페이지에서 호출할 경우, 빈 배열을 반환합니다.', async () => {
      const postsService = new PostsService() // 직접 API에서 호출 필요하여 내부에서 선언
      const pagination = { _page: 100, _limit: 4 } // 401~ 404 포스트 : 없음
      const posts = await postsService.fetchMore(pagination)
      expect(posts.length).toBe(0)
    })
  })
  describe('>> getMyPost()', () => {
    it('>> 로그인한 유저의 아이디가 4인 경우, 아이디 4가 작성한 포스트 목록만 가져옵니다.', async () => {
      const postsService = new PostsService(mockPostsRepository(), mockCommentsRepository()) // mock에서 테스트해도 상관없는 경우

      const userId = 4
      const posts = (await mockPostsRepository().fetchItems()).map((post) => new Post(post))

      const filteredPosts = postsService.getMyPost(posts, userId)
      filteredPosts.forEach((post) => {
        expect(post.userId).toBe(userId)
      })
    })
  })
})
