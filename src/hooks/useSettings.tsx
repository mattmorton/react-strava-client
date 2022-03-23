import { useContext } from 'react'

import { ISettingsContext, SettingsContext } from '../context/SettingsContext'

export function useSettings(): ISettingsContext {
  return useContext<any>(SettingsContext)
}
