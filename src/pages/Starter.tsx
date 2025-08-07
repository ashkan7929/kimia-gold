// import { useState } from 'react';
// import slides from "../data/data"
// import { FaArrowRight } from "react-icons/fa";
// import { FaArrowLeftLong } from "react-icons/fa6";

export default function Starter() {
  return (
<div className="w-full min-h-screen flex items-center justify-center bg-primary-purple max-w-wide mx-auto px-4"></div>
)
//   const [current, setCurrent] = useState(0);

//   const next = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   const prev = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-primary-purple max-w-wide mx-auto px-4">
//       <div className="max-w-md w-full text-center overflow-hidden">
//         <div className="relative">
//           {/* Slides */}
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`transition-all duration-500 ${
//                 index === current ? "block" : "hidden"
//               }`}
//             >
//               <img src={slide.img} alt="" className="mx-auto w-60" />
//               <div className="mt-4 text-gray-700 text-sm">ولت بانک</div>
//               <div className="text-xl font-bold mt-1">
//                 {slide.title} <span className="text-blue-600">{slide.highlight}</span>
//               </div>
//               <p className="text-gray-500 text-sm mt-2">{slide.subtitle}</p>
//             </div>
//           ))}
//         </div>

//         {/* Bullets */}
//         <div className="flex justify-center gap-2 mt-6">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === current ? "bg-blue-600" : "bg-gray-300"
//               }`}
//             ></button>
//           ))}
//         </div>

//         {/* Navigation buttons */}
//         <div className="flex justify-between mt-6 px-4">
//           <button
//             onClick={prev}
//             aria-label="قبلی"
//             className="border border-gray-400 rounded-full p-2"
//           >
//           <FaArrowLeftLong />
//           </button>
//           <button
//             onClick={next}
//             aria-label="بعدی"
//             className="bg-blue-600 text-white rounded-full p-2"
//           >
//            <FaArrowRight />
//           </button>
//         </div>
//       </div>
    // </div>
//   );
}
