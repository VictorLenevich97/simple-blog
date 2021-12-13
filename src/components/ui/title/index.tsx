import * as S from './title.styled';

export enum TitleSizes {
    LARGE = 'large',
    MIDDLE = 'middle',
    SMALL = 'small',
}

export enum TitlePosition {
    CENTER = 'center',
    RIGHT = 'right',
    LEFT = 'left',
}

export interface Props {
    content: string;
    size?: TitleSizes;
    isMarginBottom?: boolean;
    position?: TitlePosition;
}

export const Title = ({ content, size, position = TitlePosition.LEFT, isMarginBottom }: Props) => {
    return (
        <S.Title size={size} position={position} isMarginBottom={isMarginBottom}>
            {content}
        </S.Title>
    );
};
