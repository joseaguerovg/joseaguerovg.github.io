const languageFormat = (language: string) : string => {
    switch (language) {
        case 'en-US':
            return 'en'
        case 'es-ES':
            return 'es'
    }

    return language;
}

export default languageFormat;