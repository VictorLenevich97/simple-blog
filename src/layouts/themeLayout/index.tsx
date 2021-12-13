import { useState } from 'react';
import * as R from 'ramda';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider, Global } from '@emotion/react';
import { Header } from 'components/header';
import { ThemeContext } from 'context/themeContext';
import { THEME_TYPES } from 'types/themeTypes';

import { lightTheme } from 'themes/lightTheme';
import { darkTheme } from 'themes/darkTheme';
import { defaultTheme } from 'themes/defaultTheme';

import { globalStyles } from './themeLayout.styled';

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

    const changeThemeConfig = () => {
        const selectedTheme = themeType === THEME_TYPES.LIGHT_THEME ? lightTheme : darkTheme;
        return R.mergeDeepWith(R.concat, defaultTheme, selectedTheme);
    };

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
            <ThemeProvider theme={changeThemeConfig()}>
                <title>
                    {pageTitle} | {data.site.siteMetadata.title}
                </title>
                <Global styles={globalStyles(changeThemeConfig())} />
                <Header />
                <main>{children}</main>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
