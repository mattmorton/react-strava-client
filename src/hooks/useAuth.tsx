import { useContext } from 'react'

import { AuthContext, IAuthContext } from '../context/AuthContext'

export function useAuth(): IAuthContext {
  const context = useContext<IAuthContext>(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
