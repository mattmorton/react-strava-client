import { useContext } from 'react'

import { AuthContext, IAuthContext } from '../context/AuthContext'

export function useAuth(): IAuthContext {
  console.log('init')
  return useContext<IAuthContext>(AuthContext)
}
