import { IComment, ICommentData, IPost, IPostData, Post, Comment } from '@/entities'

import { PostsRepository, CommentsRepository } from '@/repositories'

import { IPostsService } from './posts.types'

export class PostsService implements IPostsService {
  constructor(
    private readonly postsRepository = new PostsRepository(),
    private readonly commentsRepository = new CommentsRepository()
  ) {}

  async fetchMore(pagination: IPaginationRequest): Promise<IPost[]> {
    return await this.postsRepository
      .fetchItems(pagination)
      .then((posts: IPostData[]) => posts.map((item) => new Post(item)))
  }

  async fetchOne(postId: number): Promise<[IPost, IComment[]]> {
    return await Promise.all([this.fetchPost(postId), this.fetchComments(postId)])
  }

  async fetchMyPost(userId: number, pagination: IPaginationRequest): Promise<IPost[]> {
    return await this.postsRepository.fetchItems(pagination).then((posts: IPostData[]) => {
      return posts.map((item) => new Post(item))
    })
  }

  getMyPost(posts: IPost[], userId: number): IPost[] {
    return posts.filter((post) => post.userId === userId)
  }

  private fetchPost(postId: number): Promise<IPost> {
    return this.postsRepository.fetchItem(postId).then((item: IPostData) => new Post(item))
  }

  private fetchComments(postId: number): Promise<IComment[]> {
    return this.commentsRepository
      .fetchItems(postId)
      .then((items: ICommentData[]) => items.map((item: ICommentData) => new Comment(item)))
  }
}
