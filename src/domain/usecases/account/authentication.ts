export type AuthenticationParams = {
  email: string
  password: string
}

export type AuthenticationResponse = {
  accessToken: string
  name: string
}

export interface Authentication {
  auth(authentication: AuthenticationParams): Promise<AuthenticationResponse>
}
