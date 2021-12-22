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

  async fetchMore(): Promise<void> {
    this.updatePagination()
    const pagination = this.postsRepository.getPagination()

    await this.postsRepository.fetchItems(pagination).then((posts: IPostData[]) => {
      this.postsRepository.addPosts(posts)
      posts.map((item) => new Post(item))
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

  getPosts(): IPost[] {
    return this.postsRepository.getItems()?.map((item) => new Post(item))
  }

  getComments(): IComment[] | undefined {
    return this.commentsRepository.getItems()?.map((item) => new Comment(item))
  }

  private updatePagination() {
    let pagination = this.postsRepository.getPagination()
    pagination = {
      _page: pagination._page + 1,
      _limit: pagination._limit
    }
    this.postsRepository.updatePagination(pagination)
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
