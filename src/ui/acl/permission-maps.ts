export enum ROLES {
  USER = 'user',
  EDITOR = 'editor'
}

export enum SCOPES {
  canEdit = 'can-edit',
  canDelete = 'can-delete',
  canView = 'can-view'
}

export const PERMISSIONS = {
  [ROLES.USER]: [SCOPES.canView],
  [ROLES.EDITOR]: [SCOPES.canEdit, SCOPES.canDelete, SCOPES.canView]
}
