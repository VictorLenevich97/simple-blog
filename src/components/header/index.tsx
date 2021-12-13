import { Link } from 'gatsby';
import { useThemeContext } from 'hooks/useThemeContext';
import { THEME_TYPES } from 'types/themeTypes';
import { useTheme } from '@emotion/react';

import * as S from './header.styled';

export const Header = () => {
    const { theme: typeTheme, handleChangeTheme } = useThemeContext();

    return (
        <S.Nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Blog</Link>
                </li>
                <li>
                    <button
                        onClick={() =>
                            handleChangeTheme(
                                typeTheme === THEME_TYPES.LIGHT_THEME
                                    ? THEME_TYPES.DARK_THEME
                                    : THEME_TYPES.LIGHT_THEME
                            )
                        }
                    >
                        {typeTheme === THEME_TYPES.LIGHT_THEME
                            ? 'Disable dark theme'
                            : 'Disable light theme'}
                    </button>
                </li>
            </ul>
        </S.Nav>
    );
};
