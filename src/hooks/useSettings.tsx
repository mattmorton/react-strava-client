import { useContext } from 'react'

import { SettingsContext } from '../context/SettingsContext'

export function useSettings(): any {
  return useContext<any>(SettingsContext)
}
