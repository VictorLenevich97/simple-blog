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
        <Link to={slug}>
            <S.Container>
                <S.Date>{date}</S.Date>
                <Title size={TitleSizes.MIDDLE} content={title} />
            </S.Container>
        </Link>
    );
};
