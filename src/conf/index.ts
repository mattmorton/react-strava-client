import { ISettingsContext } from "../context/SettingsContext";

export const config: ISettingsContext = {
    googleApiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
    host: process.env.REACT_APP_HOST || ''
}