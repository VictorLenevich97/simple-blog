import { Link } from 'gatsby';
import { Title, TitleSizes } from 'components/ui/title';

import * as S from './postItem.styled';

interface Props {
    title: string;
    slug: string;
    date: string;
}

export const PostItem = ({ title, slug, date }: Props) => {
    return (
        <S.Container>
            <Link to={slug}>
                <S.Date>{date}</S.Date>
                <Title size={TitleSizes.MIDDLE} content={title} />
            </Link>
        </S.Container>
    );
};
