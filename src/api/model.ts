export type ApiError = 'BadRequest' | 'InternalServerError' | 'Unauthorized'
export type ApiResponse<T, E = any> = OKResponse<T> | KOResponse<E | ApiError>

export type OKResponse<T> = Readonly<{
  ok: true
  value: T
}>

export type KOResponse<T> = Readonly<{
  ok: false
  error: T
  statusCode: number
  errorMessage?: string
}>

export function responseOK<T extends object>(value: T): OKResponse<T> {
  return { ok: true, value }
}

export function responseKO<T>(value: { error: T; statusCode: number; errorMessage?: string }): KOResponse<T> {
  return { ...value, ok: false }
}
