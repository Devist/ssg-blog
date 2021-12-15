import { ILoginData, mockLogins, mockLoginsData } from '@/entities'
import UserRepository from '@/repositories/user/user'
import React from 'react'
import { LoginService } from './login'

import { shallow } from 'enzyme'
import { IUserData } from '../../entities/user/user.types'

// function fakeApp() {
//   const userRepository = new UserRepository()
//   const service = new LoginService(userRepository)

//   return (
//     <Context.Provider value={(servie, userRepository)}>
//       <div>fake</div>
//     </Context.Provider>
//   )
// }

describe('>>> Login Service', () => {
  describe('>> loginUser 메소드', () => {
    it('alexsando@ssg.com / P@ssw0rd 로 로그인시, userID 1을 사용합니다.', async () => {
      const fakeApp = async () => {
        const userRepository = new UserRepository()
        const service = new LoginService(userRepository)

        const userData: ILoginData = {
          email: 'alexsando@ssg.com',
          password: 'P@ssw0rd'
        }
        await service.loginUser(userData).then((userData: IUserData) => {
          expect(userData.id).toBe(2)
          console.log('굳잡?')
        })

        return <div>fake</div>
      }
    })
  })
})

//   describe('>> getOneById', () => {
//     it('should return one article by provided id', () => {
//       const article = mockArticles()[1]
//       const id = article.id as number
//       expect(service.getOneById(id)).toEqual(article)
//     })

//     it('should return undefined if no article found', () => {
//       expect(service.getOneById(111111)).toBeUndefined()
//     })
//   })

//   describe('>> createComment', () => {
//     const data = mockComments()[0]
//     it('should add new comment to provided article and return it', () => {
//       const article = mockArticles()[0]
//       const id = article.id as number
//       const commentsAmount = article.comments.length

//       const newArticle = service.createComment(id, data)
//       expect(newArticle.id).toEqual(article.id)
//       expect(newArticle.comments.length).toBe(commentsAmount + 1)
//     })

//     it("should throw an error if article with provided id doesn't exist", () => {
//       expect(() => {
//         service.createComment(11111, data)
//       }).toThrow()
//     })

//     it('should throw an error if comment is not valid', () => {
//       const data = {
//         ...mockComments()[0],
//         title: ''
//       }
//       expect(() => {
//         service.createComment(1, data)
//       }).toThrow()
//     })
//   })
// })
