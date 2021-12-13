import { useStaticQuery, graphql } from 'gatsby';
import { PostItem } from './components/postItem';
import { Title, TitleSizes } from 'components/ui/title';

import * as S from './postsList.styled';

export const PostsList = () => {
    const data = useStaticQuery(PostsQuery);
    const { edges: postsData } = data.allMarkdownRemark;

    return (
        <S.Container>
            <Title isMarginBottom content="Posts list" size={TitleSizes.LARGE} />
            {postsData.map(
                ({
                    node: {
                        id,
                        frontmatter: { slug, date, title },
                    },
                }) => (
                    <PostItem key={id} slug={slug} title={title} date={date} />
                )
            )}
        </S.Container>
    );
};

export const PostsQuery = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        slug
                        date
                    }
                    id
                }
            }
        }
    }
`;
