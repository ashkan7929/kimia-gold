const Loading = () => {
    return (
          <div className="w-full max-w-wide mx-auto bg-primary-purple min-h-screen flex flex-col">
                <main className="flex-grow flex flex-col bg-center bg-cover bg-line-patern">
                    <div className="flex-grow flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto">
                                <img
                                    src="/images/logo/logo.png"
                                    alt="logo webapp vewClub"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-auto mb-8">
                        <div
                            className="w-13.5 h-13.5 border-2 border-white border-b-primary-lightBlue rounded-full inline-block"
                            style={{ animation: 'rotation 1s linear infinite' }}
                        />
                    </div>
                </main>
            </div>
    );
};

export default Loading;
