import { ThemeLayout } from 'layouts/themeLayout';
import { PostsList } from 'modules/postsList';

const IndexPage = () => {
    return (
        <ThemeLayout>
            <PostsList />
        </ThemeLayout>
    );
};

export default IndexPage;
