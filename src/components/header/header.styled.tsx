import styled from '@emotion/styled';

import LampIcon from 'assets/icons/lamp.svg';

export const Nav = styled.nav`
    height: 5rem;
    margin-bottom: 60px;

    ul {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5rem;
        list-style: none;

        li > a {
            text-decoration: none;
            color: ${({ theme }: any) => theme.color.fontsColor};
        }
    }
`;

export const SwitchTheme = styled(LampIcon)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    fill: ${({ isDark, theme }: { isDark: boolean; theme: any }) =>
        isDark ? '#fadb14' : theme.color.primaryColor};
    transform: ${({ isDark, theme }: { isDark: boolean; theme: any }) =>
        isDark ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.5s;
`;
