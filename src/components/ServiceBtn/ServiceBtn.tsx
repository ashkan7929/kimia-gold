import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



type Props = {
  label: string;
  darkSrc: string;
  lightSrc: string;
  to?: string;        
  className?: string;
  imgAlt?: string;
  isDark?:boolean;
};

const ServiceBtn = ({ label, darkSrc, lightSrc, to, isDark, className = '', imgAlt }: Props) => {
   const card = (
    <div className={`dark:bg-black bg-white flex flex-col gap-2 justify-center items-center p-3 rounded-lg ${className ?? ''}`}>
      <div className="w-10 h-10 flex justify-center items-center rounded-full">
        <img
          alt={imgAlt ?? label}               
          src={isDark ? darkSrc : lightSrc}
          className="w-10 h-10 object-contain"
          width={40}
          height={40}
          loading="lazy"
        />
      </div>
      <Typography
        className="!font-alibaba dark:text-neutral-300 text-neutral-700 text-center"
        fontSize={10}
      >
        {label}
      </Typography>
    </div>
  );

  return to ? <Link to={to}>{card}</Link> : card;
};
    

export default ServiceBtn;
