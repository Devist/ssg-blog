import { IComment, IPost, IPostData, Post } from '@/entities'

import { IPostsRepository, IPostsRepositoryMock } from '@/repositories'
import { IPostsService } from './posts.types'

export class PostsService implements IPostsService {
  constructor(private readonly postsRepository: IPostsRepository | IPostsRepositoryMock) {}
  async fetchAll(): Promise<IPost[]> {
    const pagination = this.postsRepository.getPagination()
    return await this.postsRepository.fetchItems(pagination).then((posts: IPostData[]) => {
      return posts.map((item) => new Post(item))
    })
  }
  fetchOne(): Promise<IPost> {
    throw new Error('Method not implemented.')
  }
  fetchComments(postID: number): Promise<IComment[]> {
    console.log(postID)
    throw new Error('Method not implemented.')
  }
  getComments(postID: number): Promise<IComment[]> {
    console.log(postID)
    throw new Error('Method not implemented.')
  }
  getPagination(): IPaginationRequest {
    return this.postsRepository.getPagination()
  }
  updatePagination(page: number, limit?: number) {
    this.postsRepository.updatePagination(page, limit)
  }
}
