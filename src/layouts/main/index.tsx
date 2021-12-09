import { useStaticQuery, graphql, Link } from 'gatsby';

interface Props {
    children: React.ReactNode;
    pageTitle?: string;
}

export const MainLayout = ({ pageTitle, children }: Props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div>
            <title>
                {pageTitle} | {data.site.siteMetadata.title}
            </title>
            <header>{data.site.siteMetadata.title}</header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};
