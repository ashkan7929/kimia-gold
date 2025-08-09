// CSS imports removed - using Tailwind CSS instead
const MessageBox = () => {
    // const toggleMenu = () => {
    // Menu toggle logic here
    // };

    return (
        <>
            <div>
                <main className="flex-1">
                    <div className="container flex flex-col gap-3 mx-auto mb-3">
                        <div className="rounded-lg shadow-lg bg-primary-darker">
                            <div className="flex flex-col gap-4 p-4">
                                <div className="font-bold text-white text-md font-alibaba">صندوق پیام ها</div>
                                <ul className="space-y-0">
                                    <li className="flex gap-3 items-center py-3 border-b border-primary-lighter last:border-b-0">
                                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                                        <div className="flex flex-col gap-2">
                                            <div className="text-gray-300 text-[10px] font-peyda">1404/09/08 12:20</div>
                                            <div className="text-sm font-medium text-white font-peyda">
                                                قیمت طلا 24 درصد افزایش پیدا کرد
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-center py-3 border-b border-primary-lighter last:border-b-0">
                                        <div className="w-3 h-3 rounded-full bg-accent-orange" />
                                        <div className="flex flex-col gap-2">
                                            <div className="text-gray-300 text-[10px] font-peyda">1404/09/08 12:20</div>
                                            <div className="text-sm font-medium text-white font-peyda">
                                                قیمت طلا 24 درصد افزایش پیدا کرد
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-center py-3 border-b border-blue-800 last:border-b-0">
                                        <div className="w-3 h-3 bg-red-400 rounded-full" />
                                        <div className="flex flex-col gap-2">
                                            <div className="text-gray-300 text-[10px] font-peyda">1404/09/08 12:20</div>
                                            <div className="text-sm font-medium text-white font-peyda">
                                                قیمت طلا 24 درصد افزایش پیدا کرد
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>

    )
}

export default MessageBox