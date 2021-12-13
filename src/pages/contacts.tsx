import { ThemeLayout } from 'layouts/themeLayout';
import { Title, TitleSizes, TitlePosition } from 'components/ui/title';

const ContactsPage = () => {
    return (
        <ThemeLayout>
            <Title content="Contacts 📱" size={TitleSizes.MIDDLE} position={TitlePosition.CENTER} />
        </ThemeLayout>
    );
};

export default ContactsPage;
