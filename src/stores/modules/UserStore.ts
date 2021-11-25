import { IGame, ILabelMemo, IUser, UserRoleType } from '@src/entities'
import { makeAutoObservable } from 'mobx'
// import { toast } from 'react-toastify'

import { IUserService, UserService } from '@src/services'
import UserRepository from '@src/repositories/UserRepository'
import PersonalRepository from '@src/repositories/PersonalRepository'

export class UserStore {
  private service: IUserService

  private user: IUser = {
    name: '',
    email: '',
    department: '',
    games: [],
    role: UserRoleType.USER,
    phoneNumber: '',
    custom: {
      favoriteLabels: [],
      hashtagColors: [],
      labelMemos: []
    }
  }

  constructor() {
    makeAutoObservable(this)
    this.service = new UserService(new UserRepository(), new PersonalRepository())
  }

  public save(user: IUser) {
    this.user = user
  }

  public addGames(games: IGame[]) {
    this.user.games = games
  }

  public async fetch() {
    await this.service.fetch().then((response: IUser) => {
      this.user = response
    })
  }

  public saveMemo(id: number, data: ILabelMemo) {
    this.user.custom.labelMemos = [
      ...this.user.custom.labelMemos,
      this.service.addMemo(id, data)
    ]
  }

  public deleteMemo(id: number) {
    this.user.custom.labelMemos = this.service.deleteMemo(id, this.user.custom.labelMemos)
  }

  public getUser() {
    return this.user
  }

  public getMemo(labelId: number): ILabelMemo | undefined {
    return this.service.getMemo(labelId, this.user.custom.labelMemos)
  }

  public getGameNameFromCode(gameCode: string): string {
    const game = this.service.getGame(this.games, gameCode)
    return game ? game.name : ''
  }

  get games() {
    return this.user.games
  }

  get custom() {
    return this.user.custom
  }

  get name() {
    return this.user.name
  }

  get role() {
    return this.user.role
  }

  get info() {
    return this.user
  }

  get memo() {
    return this.user.custom.labelMemos
  }
  get email() {
    return this.user.email
  }

  // public addTodo = (todo: ITodo) => {
  //   this.todos.push(todo)

  //   // toast.success(<ToastSuccess />, {
  //   //     autoClose: 3000,
  //   //     hideProgressBar: true,
  //   //     closeButton: false
  //   //   })
  //   // toast.success('New Todo added', {
  //   //   position: toast.POSITION.BOTTOM_CENTER
  //   // })
  // }

  // public toggleCompleted = (id: number) => {
  //   const updatedTodos = this.todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed
  //     }
  //     return todo
  //   })
  //   this.todos = updatedTodos
  // }

  // public updateTodo = (updatedTodo: ITodo) => {
  //   const updatedTodos = this.todos.map((todo) => {
  //     if (todo.id === updatedTodo.id) {
  //       return { ...updatedTodo }
  //     }
  //     return todo
  //   })
  //   this.todos = updatedTodos
  // }

  // public deleteTodo = (id: number) => {
  //   const updatedTodos = this.todos.filter((todo) => todo.id !== id)
  //   this.todos = updatedTodos
  //   toast.info('Todo deleted', {
  //     position: toast.POSITION.BOTTOM_CENTER
  //   })
  // }

  // get todoProgress() {
  //   const completedCount = this.todos.filter((t) => t.completed).length
  //   const totalCount = this.todos.length
  //   return `${completedCount} / ${totalCount}`
  // }

  // get completedTodos() {
  //   return this.todos.filter((todo) => todo.completed)
  // }

  // get incompleteTodos() {
  //   return this.todos.filter((todo) => !todo.completed)
  // }
}
export default new UserStore()
