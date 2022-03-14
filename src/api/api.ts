import queryString from 'querystring'
import { ApiResponse, responseKO, responseOK } from './model'

export interface RequestOptions<T = any> {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body: T
  params: Record<string, any>
  headers: Record<string, string>
  token: string
}

export async function api<T, E = any, B = any>(
  url: string,
  options: Partial<RequestOptions<B>> = {}
): Promise<ApiResponse<T, E>> {

  const defaultOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
      ...(options.body ? { 'Content-Type': 'application/json' } : {})
    }
  }

  let response

  try {
    response = await fetch(url, {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers
      },
      body: JSON.stringify(options.body)
    })

    if (!response.ok) {
      return responseKO({
        error: await response.json(),
        statusCode: response.status
      })
    }
    return responseOK(await response.json())
  } catch {
    return responseKO({
      error: 'InternalServerError',
      statusCode: !!response && !!response.status ? response.status : 500
    })
  }
}