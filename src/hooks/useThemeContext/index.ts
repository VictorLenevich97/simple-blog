import React from 'react';
import { ThemeContext } from 'context/themeContext';
import { THEME_TYPES } from 'types/themeTypes';

export const useThemeContext = () => {
    const theme = React.useContext(ThemeContext);

    const setThemeTypeToCache = (value) => {
        localStorage.setItem(THEME_TYPES.THEME_TYPE, value);
        theme.handleChangeThemeType(value);
    };

    return { ...theme, handleChangeThemeType: setThemeTypeToCache };
};
