import { useStaticQuery, graphql } from 'gatsby';
import { PostItem } from './components/postItem';
import { Title, TitleSizes } from 'components/ui/title';

import * as S from './postsList.styled';

export const PostsList = () => {
    const data = useStaticQuery(PostsQuery);
    const { edges: postsData } = data.allMarkdownRemark;

    return (
        <S.Container>
            <Title isMarginBottom content="Recent posts 💣" size={TitleSizes.LARGE} />
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
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
                node {
                    frontmatter {
                        title
                        slug
                        date(formatString: "MMMM DD, YYYY")
                    }
                    id
                }
            }
        }
    }
`;
