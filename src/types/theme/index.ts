import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            primaryColor: string;
            backgroundColor: string;
            fontsColor: string;
            hoverFontsColor?: string;
            gray_1: string;

            // ...add here new theme values
        };
    }
}

export enum THEME_TYPES {
    THEME_TYPE = 'THEME_TYPE',
    LIGHT_THEME = 'LIGHT_THEME',
    DARK_THEME = 'DARK_THEME',
}
