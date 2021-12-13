import { ThemeLayout } from 'layouts/themeLayout';
import { Title, TitleSizes, TitlePosition } from 'components/ui/title';

const NotFoundPage = () => {
    return (
        <ThemeLayout>
            <Title
                content="Not found 🤷🏽"
                size={TitleSizes.MIDDLE}
                position={TitlePosition.CENTER}
            />
        </ThemeLayout>
    );
};

export default NotFoundPage;
