import React,{useState, useEffect} from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import { quantumProducts,aiProducts } from '../Data/Products';


const PinPointer = ({title}) => (
 <motion.div className='pointer-events-none w-96 h-80 flex items-center justify-center opacity-1 group-hover/pin:opacity-100 z-[60] transition duration-500'>
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
          
            target={"_blank"}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>
        </div>
  <>
    <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-slate-300 translate-y-[14px] w-px h-40 group-hover/pin:h-38 blur-[2px]" />
    <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-white translate-y-[14px] w-px h-40 group-hover/pin:h-38" />
    <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-white translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
    <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-white translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
  </>
  </motion.div>
);

export default function Productspicture() {
    const [hoveredIndex1, setHoveredIndex1] = useState(null);
    const [hoveredIndex2, setHoveredIndex2] = useState(null);
  
    const totalImages1 = quantumProducts.length;
    const totalImages2 = aiProducts.length;
    const angleIncrement1 = 240 / (totalImages1 - 1);
    const angleIncrement2 = 90 / (totalImages2 - 1);

    const [radius1, setradius1] = useState(215);
    const [radius2, setradius2] = useState(155);
    const [centerImageSize1, setcenterImageSize1] = useState(270);
    const [centerImageSize2, setcenterImageSize2] = useState(160);
    const [surroundingQuantumWidth, setsurroundingQuantumWidth] = useState(74);
    const [surroundingQuantumHeight, setsurroundingQuantumHeight] = useState(74.5);
    const [enlargedImageSizeWidth, setenlargedImageSizeWidth] = useState(95);
    const [enlargedImageSizeHeight, setenlargedImageSizeHeight] = useState(95.6);
    
   

    useEffect(() => {
      const updateBackgroundImage = () => {
        const screenWidth = window.innerWidth;
  
        if (screenWidth >= 1536) {
          setradius1(250);
          setradius2(200);
          setcenterImageSize1(320);
          setcenterImageSize2(200);
          setsurroundingQuantumWidth(86.4);
          setsurroundingQuantumHeight(87);
          setenlargedImageSizeWidth(105.334);
          setenlargedImageSizeHeight(106);
        } else {
          setradius1(215);
          setradius2(155);
          setcenterImageSize1(270);
          setcenterImageSize2(160);
          setsurroundingQuantumWidth(74);
          setsurroundingQuantumHeight(74.5);
          setenlargedImageSizeWidth(95);
          setenlargedImageSizeHeight(95.6);
        }
      };
  
      updateBackgroundImage();
      
    }, []);


    return (
        <div className="w-full  flex items-center justify-center md:h-[37.5rem] 2xl:h-[45rem] ">
             <div className='w-full relative flex items-center justify-center h-full 2xl:h-[38rem]' >
                <div className='absolute  h-full top-[22%] transform -translate-x-1/2 left-1/2'>
                    <img className='block object-cover' src={require("../../src/Images/QuantumCircleblack.png")} style={{
                        width: `${centerImageSize1}px`,
                        height: `${centerImageSize1}px`,
                    }} alt="Quantum Circle" />
                    <p className=' absolute top-[22%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-RobotoBold  text-white font-extrabold text-xl  xl:text-4xl '>Quantum</p>
                    {quantumProducts.map((product, index) => {
                        const angle = 150 + index * angleIncrement1;
                        const x = radius1 * Math.cos((angle * Math.PI) / 180);
                        const y = radius1 * Math.sin((angle * Math.PI) / 180);
                        return (
                         
                           
                            <div
                            key={index}
                            className="absolute flex flex-col items-center justify-center gap-2"
                            style={{
                              width: `${hoveredIndex1 === index ? enlargedImageSizeWidth : surroundingQuantumWidth}px`,
                              height: `${hoveredIndex1 === index ? enlargedImageSizeHeight : surroundingQuantumHeight}px`,
                              zIndex: hoveredIndex1 === index ? 10 : 1,
                              top: `calc(25% + ${y}px)`,
                              left: `calc(50% + ${x}px)`,
                              transform: `translate(-50%, -50%)`,
                              transition: 'transform 3s ease-in-out',
                            }}
                            onMouseEnter={() => setHoveredIndex1(index)}
                            onMouseLeave={() => setHoveredIndex1(null)}
                          >
                            <img
                            
                              src={product.image}
                              alt={product.name}
                              className="object-fill cursor-pointer"
                            />
                            <p className={`text-white  text-center w-full ${hoveredIndex1=== index? '2xl:text-lg text-sm':'2xl:text-sm text-xs'}`}>{product.name}</p>
                          
                          </div>
                       
                          
                          
                        
                        );
                    })}
                </div>

                {/* AI Circle */}
                <div className='absolute top-[50%] transform -translate-x-1/2 left-1/2'>
                    <img className='block object-cover' src={require("../../src/Images/AICircleblack.png")} style={{
                        width: `${centerImageSize2}px`,
                        height: `${centerImageSize2}px`,
                    }} alt="AI Circle" />
                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-RobotoBold text-white font-extrabold text-xl  xl:text-4xl '>AI</p>
                    {aiProducts.map((product, index) => {
                        const angle = 45 + index * angleIncrement2;
                        const x = radius2 * Math.cos((angle * Math.PI) / 180);
                        const y = radius2 * Math.sin((angle * Math.PI) / 180);
                        return (
                           
                            <div
                            key={index}
                            className="absolute flex flex-col items-center justify-center gap-2"
                            style={{
                              width: `${hoveredIndex2 === index ? enlargedImageSizeWidth : surroundingQuantumWidth}px`,
                              height: `${hoveredIndex2 === index ? enlargedImageSizeHeight : surroundingQuantumHeight}px`,
                              zIndex: hoveredIndex2 === index ? 10 : 1,
                              top: `calc(50% + ${y}px)`,
                              left: `calc(50% + ${x}px)`,
                              transform: `translate(-50%, -50%)`,
                              transition: 'transform 3s ease-in-out',
                            }}
                            onMouseEnter={() => setHoveredIndex2(index)}
                            onMouseLeave={() => setHoveredIndex2(null)}
                          >
                            <img
                            
                              src={product.image}
                              alt={product.name}
                              className="object-fill cursor-pointer"
                            />
                            <p className={`text-white  text-center w-full ${hoveredIndex2=== index? '2xl:text-lg text-sm':'2xl:text-sm text-xs'}`}>{product.name}</p>
                          
                          </div>
                       
                          
                        );
                    })}
                </div>

            </div>
            
        </div>




    );
}