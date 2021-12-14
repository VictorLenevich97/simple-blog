import { useState } from 'react';
import * as R from 'ramda';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider, Global } from '@emotion/react';
import { Header } from 'components/header';
import { ThemeContext } from 'context/themeContext';
import { THEME_TYPES } from 'types/theme';
import { Footer } from 'components/footer';

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
                themeType:
                    themeType === THEME_TYPES.LIGHT_THEME
                        ? THEME_TYPES.LIGHT_THEME
                        : THEME_TYPES.DARK_THEME,
                handleChangeThemeType: setThemeType,
            }}
        >
            <ThemeProvider theme={changeThemeConfig()}>
                <Global styles={globalStyles(changeThemeConfig())} />
                <title>
                    {pageTitle} | {data.site.siteMetadata.title}
                </title>
                <Header />
                <main>{children}</main>
                <Footer />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
