import styled from '@emotion/styled';

export const Nav = styled.nav`
    height: 5rem;

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
