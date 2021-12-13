import { ThemeLayout } from 'layouts/themeLayout';
import { Title, TitleSizes, TitlePosition } from 'components/ui/title';

const AboutPage = () => {
    return (
        <ThemeLayout>
            <Title content="About me 🐰" size={TitleSizes.MIDDLE} position={TitlePosition.CENTER} />
        </ThemeLayout>
    );
};

export default AboutPage;
