import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';

const About = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="w-full mx-auto min-h-screen flex flex-col">
                <main
                    className="flex-grow bg-cover bg-center"
                    style={{
                        backgroundImage: "url('../statics/assets/images/main-lines-pattern.png')",
                    }}
                >
                    <div className="flex flex-col gap-3 mb-3">
                        <section className="">
                            <div className="bg-primary-darker light:bg-light-primary-darker rounded-lg shadow-[0px_0px_91.921px_0px_rgba(0,0,0,0.08)]">
                                <div className="p-4 flex flex-col gap-2">
                                    <div className="text-center relative w-56 h-[8.25rem] mx-auto my-4 flex items-center justify-center">
                                        <div className="w-24 h-24">
                                            <img
                                                src="/images/logo/logo.png"
                                                alt=""
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="absolute inset-0">
                                            <img src="/images/about-group-icon.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="text-center font-peyda text-lg font-bold leading-normal my-3 text-white light:text-light-text-color">
                                        {t('about_title')}
                                    </div>
                                    <div className="text-white light:text-light-text-color text-right font-normal leading-loose mb-3">
                                        <p className="mb-2 font-peyda">
                                            {t('about_p1')}
                                            <br /> {t('about_p2')}
                                        </p>
                                    </div>
                                    <div>
                                        <Button className="bg-primary-blue w-full text-white text-sm">
                                            {t('support')}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
};

export default About;
