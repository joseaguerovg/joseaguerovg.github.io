import { createContext } from "react";
import { ILanguageContext } from "../interfaces/ILanguageContext";
import { en } from "../utils/language/en"

const defaultValuesLanguageContext: ILanguageContext = {
    language: 'en-US', 
    setLanguage: () => {},
    text: en,
    setText: () => {}
}

const LanguageContext = createContext<ILanguageContext>(defaultValuesLanguageContext);

export default LanguageContext;