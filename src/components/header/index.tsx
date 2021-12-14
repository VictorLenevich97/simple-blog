import { Link } from 'gatsby';
import { useThemeContext } from 'hooks/useThemeContext';
import { THEME_TYPES } from 'types/themeTypes';
import { usePathName } from 'hooks/usePathName';

import * as S from './header.styled';

const NAVIGATION_DATA = [
    { id: 1, title: 'Blog', link: '/' },
    { id: 2, title: 'About me', link: '/about' },
    { id: 3, title: 'Contacts', link: '/contacts' },
];

export const Header = () => {
    const currentPathName = usePathName();
    const { themeType, handleChangeThemeType } = useThemeContext();

    return (
        <S.Nav>
            <ul>
                {NAVIGATION_DATA.map(({ id, title, link }) => (
                    <li key={id}>
                        <Link to={link}>
                            {title} {currentPathName === link && '🔴'}
                        </Link>
                    </li>
                ))}
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
