import { createContext } from "react";
import { ILanguageContext } from "../interfaces/ILanguageContext";

const defaultValuesLanguageContext: ILanguageContext = {
    language: 'en-US', 
    setLanguage: () => {}
}

const LanguageContext = createContext<ILanguageContext>(defaultValuesLanguageContext);

export default LanguageContext;