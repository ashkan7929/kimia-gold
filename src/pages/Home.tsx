import GroupBtn from '../components/btns/GroupBtn'
import MainBtn from '../components/btns/MainBtn'
import { HiDownload } from "react-icons/hi";

const Home = () => {
const handleDownload = () => {
  console.log("download")
}
// const { t } = useTranslation();
  return (
    <div className='bg-primary-light flex flex-col gap-2'>
        {/* <MainBtn  type={t('type')} */}
        <MainBtn type="login"/>
        <GroupBtn type="continue" />
        <GroupBtn type="addNewCard" />
        <GroupBtn type="save" />
        <GroupBtn type="delete" />
        <GroupBtn type="back" icon={<HiDownload />} onClick={handleDownload}/>

    </div>
  )
}

export default Home