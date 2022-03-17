import React, { useState } from 'react'
import { config } from '../conf'

const SettingsContext = React.createContext<any>({})

const SettingsProvider = (props: any) => {

  return <SettingsContext.Provider value={config}>{props.children}</SettingsContext.Provider>
}

export { SettingsContext, SettingsProvider }
