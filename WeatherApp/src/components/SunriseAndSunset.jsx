import React from "react";
import { TbSunHigh, TbSunLow } from "react-icons/tb";
const SunriseAndSunset = ({data}) => {
    return (
        <div className=' text-[#000a18e0]'>

            <div className=' justify-between flex flex-row w-full items-center'>
                <div className=' flex flex-col justify-center text-center'>
                    <div className=' flex justify-center'>
                        <TbSunHigh size={25} />
                    </div>
                    <p className=' font-light text-sm'>
                        Максимальная температура: <span>{Math.round(data.main.temp_max)}&deg;</span>
                    </p>
                </div>
                <hr className=' border-[#0000000d] w-[40%]' />
                <div className=' flex flex-col justify-center text-center'>
                    <div className=' flex justify-center'>
                        <TbSunLow size={25} />
                    </div>
                    <p className=' font-light text-sm'>
                        Минимальная температура: <span>{Math.round(data.main.temp_min)}&deg;</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SunriseAndSunset;

