import React from 'react';
import { graphql } from 'gatsby';
import { MainLayout } from '../layouts/main';

export const BlogDetailPage = ({ data }: any) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <MainLayout>
            <div>
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </MainLayout>
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
