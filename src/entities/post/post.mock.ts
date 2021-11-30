import { IPost, IPostData } from './post.types'
import { Post } from './post'

export const mockPostsData = (): IPostData[] => [
  {
    userId: 1,
    id: 10,
    title: 'optio molestias id quia eum',
    body:
      'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'
  },
  {
    userId: 2,
    id: 11,
    title: 'et ea vero quia laudantium autem',
    body:
      'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'
  }
]

export const mockPosts = (data: IPostData[] = mockPostsData()): IPost[] => {
  return data.map((item) => new Post(item))
}
