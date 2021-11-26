// import { IUser, IUserData, USER_ROLE_TYPE } from './user.types'

// export class User implements IUser {
//   role: USER_ROLE_TYPE
//   id?: number | undefined
//   name?: string | undefined
//   email: string
//   phone: number
//   password: string

//   constructor(IUserData) {}

//   private setInformation(userData: IUserData): void {
//     this.name = userData.name
//     this.role = userData.role
//     this.email = userData.email
//   }

//   private static getDecryptedInfo(data: string): IUserData {
//     const decryption = {
//       key: process.env.REACT_APP_AES_KEY ? process.env.REACT_APP_AES_KEY : '',
//       iv: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
//     }

//     const encryptedBytes = aesjs.utils.hex.toBytes(data)
//     const aesCbc = new aesjs.ModeOfOperation.cbc(
//       aesjs.utils.utf8.toBytes(decryption.key),
//       decryption.iv
//     )
//     const decryptedBytes = aesCbc.decrypt(encryptedBytes)
//     const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes).trim()
//     return JSON.parse(
//       decryptedText
//         .substring(0, decryptedText.indexOf('}') + 1)
//         .replace(/=/g, ':')
//         .replace(/'/g, '"')
//         .replace(/([a-zA-Z0-9-_]+):/g, '"$1":')
//     )
//   }

//   validate(): boolean {
//     throw new Error('Method not implemented.')
//   }
// }
