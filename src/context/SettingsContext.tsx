import React from 'react'
import { config } from '../conf'

export interface ISettingsContext {
  googleApiKey: string;
  host: string;
}

const SettingsContext = React.createContext<any>({} as ISettingsContext)

const SettingsProvider = ({ children }: { children: JSX.Element }) => {

  return <SettingsContext.Provider value={config}>{children}</SettingsContext.Provider>
}

export { SettingsContext, SettingsProvider }
