import { Link } from 'gatsby';
import { useThemeContext } from 'hooks/useThemeContext';
import { THEME_TYPES } from 'types/themeTypes';

import * as S from './header.styled';

export const Header = () => {
    const { themeType, handleChangeThemeType } = useThemeContext();

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
                    <S.SwitchTheme
                        isDark={themeType === THEME_TYPES.DARK_THEME}
                        onClick={() =>
                            handleChangeThemeType(
                                themeType === THEME_TYPES.LIGHT_THEME
                                    ? THEME_TYPES.DARK_THEME
                                    : THEME_TYPES.LIGHT_THEME
                            )
                        }
                    />
                </li>
            </ul>
        </S.Nav>
    );
};
