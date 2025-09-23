import type { TextereaProps } from '../../types/input';

const TextareaInput = ({ title, placeholder }: TextereaProps) => {
    return (
        <div className="flex  dark:bg-black bg-primary-whiteSpecial border-custom-gray flex-col gap-2">
      <label className="dark:text-custom-text-primary text-xl-custom font-bold mb-2 block">
                {title}
            </label>
            <div className="border dark:border-custom-border-light rounded-xl">
                <textarea
                    className="w-full placeholder:text-custom-text-gray p-2 border border-custom-border-light text-custom-text-gray text-xl-custom
                           items-start bg-transparent outline-none  self-stretch"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};
export default TextareaInput;
