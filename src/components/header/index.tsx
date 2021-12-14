import { Link } from 'gatsby';
import { useThemeContext } from 'hooks/useThemeContext';
import { THEME_TYPES } from 'types/theme';
import { usePathName } from 'hooks/usePathName';
import { ROUTES } from 'constant/routes';

import * as S from './header.styled';

const NAVIGATION_DATA = [
    { id: 1, title: 'Blog', link: ROUTES.HOME_PAGE },
    { id: 2, title: 'About me', link: ROUTES.ABOUT_ME },
    { id: 3, title: 'Contacts', link: ROUTES.CONTACTS },
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
