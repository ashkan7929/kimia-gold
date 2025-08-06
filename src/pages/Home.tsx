import GroupBtn from '../components/btns/GroupBtn'
import MainBtn from '../components/btns/MainBtn'

const Home = () => {

// const { t } = useTranslation();
  return (
    <div className='bg-primary-light flex flex-col gap-2'>
        {/* <MainBtn  type={t('type')} */}
        <MainBtn type="login"/>
        <GroupBtn type="continue" />
        <GroupBtn type="addNewCard" />
        <GroupBtn type="save" />
        <GroupBtn type="delete" />
        <GroupBtn type="back" />

    </div>
  )
}

export default Home