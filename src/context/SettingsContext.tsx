import React, { useState } from 'react'
import { config } from '../conf'

export interface ISettingsContext {
  googleApiKey: string;
  host: string;
}

const SettingsContext = React.createContext<any>({} as ISettingsContext)

const SettingsProvider = (props: any) => {

  return <SettingsContext.Provider value={config}>{props.children}</SettingsContext.Provider>
}

export { SettingsContext, SettingsProvider }
