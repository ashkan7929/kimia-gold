
import { useTranslation } from 'react-i18next';

import TextareaInput from '../components/Inputs/TextareaInput';



const Home = () => {

    const { t } = useTranslation();


    return (
        <div className="bg-primary-light ">
 
            <TextareaInput  placeholder={t('textereaPlaceholder')} title={t('titleTexterea')}/>
        </div>
    );
};

export default Home;
