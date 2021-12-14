import { Title, TitleSizes, TitlePosition } from 'components/ui/title';

import * as S from './postDetail.styled';

interface Props {
    title: string;
    date: string;
    html: any;
}

export const PostDetail = ({ title, date, html }: Props) => (
    <S.Container>
        <Title content={title} size={TitleSizes.MIDDLE} position={TitlePosition.CENTER} />
        <span>{date}</span>
        <S.Content dangerouslySetInnerHTML={{ __html: html }} />
    </S.Container>
);
