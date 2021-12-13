import * as S from './title.styled';

export enum TitleSizes {
    LARGE = 'large',
    MIDDLE = 'middle',
    SMALL = 'small',
}

export interface Props {
    content: string;
    size?: TitleSizes;
    isMarginBottom?: boolean;
}

export const Title = ({ content, size, isMarginBottom }: Props) => {
    return (
        <S.Title size={size} isMarginBottom={isMarginBottom}>
            {content}
        </S.Title>
    );
};
