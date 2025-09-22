const ToggleButton = () => {
    return (
        <label className="relative inline-block w-[3.25rem] h-[1.75rem]" dir="ltr">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 dark:bg-gray-800 transition-all duration-300 rounded-full before:absolute before:content-[''] before:h-[1.375rem] before:w-[1.375rem] before:left-[0.1875rem] before:bottom-[0.1875rem] before:bg-white before:transition-all before:duration-300 before:rounded-full peer-checked:bg-primary-blue dark:peer-checked:bg-accent-orange peer-checked:before:translate-x-[1.5rem]"></span>
        </label>
    )
}

export default ToggleButton