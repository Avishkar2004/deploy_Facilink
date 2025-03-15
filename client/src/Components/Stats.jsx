import React from 'react';

const Stats = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-3 w-full">
            <div className="container mx-auto text-center">
                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center text-center w-full">
                    {/* Clients */}
                    <div className="flex flex-col items-center w-1/2 xsm:w-1/2 sm:w-1/4 lg:w-auto">
                        <p className="text-2xl ssm:text-3xl text-white">300+</p>
                        <p className="text-sm ssm:text-lg font-semibold text-gray-200">CLIENTS</p>
                    </div>
                    {/* Area Serving */}
                    <div className="flex flex-col items-center w-1/2 xsm:w-1/2 sm:w-1/4 lg:w-auto">
                        <p className="text-2xl ssm:text-3xl text-white">7 Lakh+</p>
                        <p className="text-sm ssm:text-lg font-semibold text-gray-200">mn SQ FT AREA SERVING</p>
                    </div>
                    {/* Cities */}
                    <div className="flex flex-col items-center w-1/2 xsm:w-1/2 sm:w-1/4 lg:w-auto">
                        <p className="text-2xl ssm:text-3xl text-white">2+</p>
                        <p className="text-sm ssm:text-lg font-semibold text-gray-200">CITIES</p>
                    </div>
                    {/* Client Satisfaction Index */}
                    <div className="flex flex-col items-center w-1/2 xsm:w-1/2 sm:w-1/4 lg:w-auto">
                        <p className="text-2xl ssm:text-3xl text-white">4.2 - 4.8</p>
                        <p className="text-sm ssm:text-lg font-semibold text-gray-200">CLIENT SATISFACTION INDEX</p>
                    </div>
                    {/* Offices */}
                    <div className="flex flex-col items-center w-1/2 xsm:w-1/2 sm:w-1/4 lg:w-auto">
                        <p className="text-2xl ssm:text-3xl text-white">500+</p>
                        <p className="text-sm ssm:text-lg font-semibold text-gray-200">OFFICES</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
