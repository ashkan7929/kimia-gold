import GroupBtn from '../components/btns/GroupBtn';
import MainBtn from '../components/btns/MainBtn';
import Datepicker from '../components/Inputs/Datepiker'
import { HiDownload } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
const Home = () => {
    const handleDownload = () => {
        console.log('download');
    };

    const { t } = useTranslation();

    return (
        <div className="bg-primary-light flex flex-col gap-2">
            <Datepicker placeholder={t('datePlaceholder')} />
        
            <MainBtn type="login" />
            <GroupBtn type="continue" />
            <GroupBtn type="addNewCard" />
            <GroupBtn type="save" />
            <GroupBtn type="delete" />
            <GroupBtn type="back" icon={<HiDownload />} onClick={handleDownload} />
        </div>
    );
};

export default Home;
