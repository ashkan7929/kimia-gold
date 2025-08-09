const Loading = () => {
    return (
        <>
            <div className="w-full mx-auto bg-primary-purple min-h-screen flex flex-col h-full">
                <main
                    className="flex-grow flex items-center justify-center h-full"
                    style={{
                        backgroundImage: "url('/images/Lines-pattern-starters.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="text-center relative h-full">
                        <div className="w-24 h-24">
                            <img
                                src="/images/logo/logo.png"
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="fixed bottom-10 right-0 left-0 flex items-center justify-center">
                            <div
                                className="w-12.5 h-12.5 border-[3px] border-white border-b-primary-blue rounded-full inline-block animate-spin"
                                style={{
                                    animation: 'rotation 1s linear infinite'
                                }}
                            />
                        </div>
                    </div>
                </main>
            </div>
            <style>{`
        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </>
    )
}

export default Loading