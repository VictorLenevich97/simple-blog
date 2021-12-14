import { graphql } from 'gatsby';
import { ThemeLayout } from 'layouts/themeLayout';
import { PostDetail } from 'modules/postDetail';

export const BlogDetailPage = ({ data }: any) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    console.log('html', html);

    return (
        <ThemeLayout>
            <PostDetail title={frontmatter.title} date={frontmatter.date} html={html} />
        </ThemeLayout>
    );
};

export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`;

export default BlogDetailPage;
