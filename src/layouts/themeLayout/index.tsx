import { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from '@emotion/react';
import { Header } from 'components/header';
import { ThemeContext } from 'context/themeContext';
import { THEME_TYPES } from 'types/themeTypes';

import { lightTheme } from 'themes/light-theme';
import { darkTheme } from 'themes/dark-theme';

interface Props {
    children: React.ReactNode;
    pageTitle?: string;
}

export const ThemeLayout = ({ pageTitle, children }: Props) => {
    const [themeType, setThemeType] = useState(localStorage.getItem(THEME_TYPES.THEME_TYPE));

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <ThemeContext.Provider
            value={{
                theme:
                    themeType === THEME_TYPES.LIGHT_THEME
                        ? THEME_TYPES.LIGHT_THEME
                        : THEME_TYPES.DARK_THEME,
                handleChangeTheme: setThemeType,
            }}
        >
            <ThemeProvider theme={themeType === THEME_TYPES.LIGHT_THEME ? lightTheme : darkTheme}>
                <title>
                    {pageTitle} | {data.site.siteMetadata.title}
                </title>
                <Header />
                <main>{children}</main>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
