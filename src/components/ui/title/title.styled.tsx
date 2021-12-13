import { TitleSizes } from './index';

import styled from '@emotion/styled';

interface TitleStyledProps {
    isMarginBottom: boolean;
    size: TitleSizes;
}

export const Title = styled.h1<TitleStyledProps>`
    margin-bottom: ${({ isMarginBottom }) => isMarginBottom && '20px'};
    font-size: ${({ size }) =>
        size === TitleSizes.LARGE ? '3rem' : size === TitleSizes.MIDDLE ? '2rem' : '1rem'};
`;
