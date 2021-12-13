import { css } from '@emotion/react';

export const globalStyles = (theme) => {
    return css`
        html,
        body {
            font-family: 'Arial';
            margin: 0 auto;
            max-width: 1200px;
            background-color: ${theme.color.backgroundColor};
            color: ${theme.color.fontsColor};
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
            margin: 0;
        }

        a {
            text-decoration: none;
            color: ${theme.color.fontsColor};
        }

        ul {
            margin: 0;
            padding: 0;
        }
    `;
};
