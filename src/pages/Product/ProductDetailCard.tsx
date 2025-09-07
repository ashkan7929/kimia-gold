import { Typography } from '@mui/material';
import ToggleButton from '../../components/Inputs/ToggleButton';
import { Disclosure, Transition } from '@headlessui/react';
import { CiMobile3, FaChevronDown, FaChevronUp } from '../../Icons';
import TextField from '../../components/Inputs/TextField';
import CheckBox from '../../components/Inputs/Checkbox';
import Button from '../../components/Button/Button';

const ProductDetailCard = () => {
  return (
    <div className="bg-primary-darker dark:bg-primary-darker/90">
      <div className="mx-3 mt-2 flex items-center justify-between">
        <Typography className="!font-peyda text-text-color dark:text-white" fontSize={12}>
          آیا بیمه‌شده با بیمه‌گذار یکی است؟
        </Typography>
        <ToggleButton />
      </div>

      <Disclosure as="div" className="p-1">
        {({ open }) => (
          <div className="w-full rounded-lg bg-custom-bg-card dark:bg-white/5 transition-all duration-700">
            <Disclosure.Button className="flex w-full cursor-pointer items-center justify-between p-4">
              <span className="font-peyda text-xs text-text-color dark:text-white">
                تکمیل اطلاعات هویتی
              </span>
              {open ? <FaChevronUp fontSize={12} /> : <FaChevronDown fontSize={12} />}
            </Disclosure.Button>

            <Transition
              enter="transition transition-[max-height] duration-500 ease-in"
              enterFrom="transform max-h-0"
              enterTo="transform max-h-[200vh]"
              leave="transition transition-[max-height] duration-500 ease-out"
              leaveFrom="transform max-h-screen"
              leaveTo="transform max-h-0"
            >
              <Disclosure.Panel as="div" className="overflow-hidden">
                <div className="flex flex-col gap-3 p-4">
                  <div>
                    <label className="mb-2 block font-peyda text-micro font-semibold leading-normal text-text-color dark:text-white">
                      قد (سانتی‌متر)
                    </label>
                    <TextField mobileIcon={<CiMobile3 />} placeholder="لطفاً قد خود را وارد کنید" />
                  </div>

                  <div>
                    <label className="mb-2 block font-peyda text-micro font-semibold leading-normal text-text-color dark:text-white">
                      وزن
                    </label>
                    <TextField mobileIcon={<CiMobile3 />} placeholder="لطفاً وزن خود را وارد کنید" />
                  </div>

                  <div className="flex items-center text-text-color dark:text-white">
                    <CheckBox label="آیا سیگار می‌کشید؟" defaultChecked />
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>

      <Disclosure as="div" className="p-1">
        {({ open }) => (
          <div className="w-full rounded-lg bg-custom-bg-card dark:bg-white/5 transition-all duration-700">
            <Disclosure.Button className="flex w-full cursor-pointer items-center justify-between p-4">
              <span className="font-peyda text-xs text-text-color dark:text-white">
                تکمیل اطلاعات بیمه‌ای
              </span>
              {open ? <FaChevronUp fontSize={12} /> : <FaChevronDown fontSize={12} />}
            </Disclosure.Button>

            <Transition
              enter="transition transition-[max-height] duration-500 ease-in"
              enterFrom="transform max-h-0"
              enterTo="transform max-h-[200vh]"
              leave="transition transition-[max-height] duration-500 ease-out"
              leaveFrom="transform max-h-screen"
              leaveTo="transform max-h-0"
            >
              <Disclosure.Panel as="div" className="overflow-hidden">
                <div className="flex flex-col gap-3 p-4">
                  <div>
                    <label className="mb-2 block font-peyda text-micro font-semibold leading-normal text-text-color dark:text-white">
                      شماره بیمه‌نامه قبلی (اختیاری)
                    </label>
                    <TextField placeholder="" />
                  </div>
                  <div className="flex items-center text-text-color dark:text-white">
                    <CheckBox label="آیا سابقه بیمه عمر دارید؟" />
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>

      <Button className="font-peyda mt-4 w-full rounded-md bg-primary-blue text-sm text-white">
        ثبت اطلاعات
      </Button>
    </div>
  );
};

export default ProductDetailCard;
