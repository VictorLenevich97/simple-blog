import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            backgroundColor: string;
            fontsColor: string;
            hoverFontsColor?: string;
        };
    }
}

export enum THEME_TYPES {
    THEME_TYPE = 'THEME_TYPE',
    LIGHT_THEME = 'LIGHT_THEME',
    DARK_THEME = 'DARK_THEME',
}
