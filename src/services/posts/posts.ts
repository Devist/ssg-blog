import { IComment, ICommentData, IPost, IPostData, Post, Comment } from '@/entities'

import {
  IPostsRepository,
  IPostsRepositoryMock,
  PostsRepository,
  ICommentsRepository,
  ICommentsRepositoryMock,
  CommentsRepository
} from '@/repositories'

import { IPostsService } from './posts.types'

export class PostsService implements IPostsService {
  constructor(
    private readonly postsRepository:
      | IPostsRepository
      | IPostsRepositoryMock = new PostsRepository(),
    private readonly commentsRepository:
      | ICommentsRepository
      | ICommentsRepositoryMock = new CommentsRepository()
  ) {}

  async fetchAll(): Promise<IPost[]> {
    const pagination = this.postsRepository.getPagination()
    return await this.postsRepository.fetchItems(pagination).then((posts: IPostData[]) => {
      return posts.map((item) => new Post(item))
    })
  }
  async fetchOne(postID: number): Promise<[IPost, IComment[]]> {
    this.commentsRepository.updateItems(null)
    return await Promise.all([this.fetchPost(postID), this.fetchComments(postID)]).then(
      (response) => {
        this.commentsRepository.updateItems(response[1])
        return response
      }
    )
  }

  getComments(): IComment[] | undefined {
    return this.commentsRepository.getItems()?.map((item) => new Comment(item))
  }
  getPagination(): IPaginationRequest {
    return this.postsRepository.getPagination()
  }
  updatePagination(page: number, limit?: number) {
    this.postsRepository.updatePagination(page, limit)
  }

  private fetchPost(postID: number): Promise<IPost> {
    return this.postsRepository.fetchItem(postID).then((item: IPostData) => new Post(item))
  }

  private fetchComments(postID: number): Promise<IComment[]> {
    return this.commentsRepository
      .fetchItems(postID)
      .then((items: ICommentData[]) => items.map((item: ICommentData) => new Comment(item)))
  }
}
