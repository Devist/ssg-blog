export const ROLES = {
  USER: 'user',
  EDITOR: 'editor'
}

export const CAN = {
  EDIT: 'can-edit',
  DELETE: 'can-delete',
  VIEW: 'can-view'
}

export const PERMISSIONS = {
  [ROLES.USER]: [CAN.VIEW],
  [ROLES.EDITOR]: [CAN.EDIT, CAN.DELETE, CAN.VIEW]
}
