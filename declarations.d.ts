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

declare module '*.svg' {
    const content: any;
    export default content;
}
