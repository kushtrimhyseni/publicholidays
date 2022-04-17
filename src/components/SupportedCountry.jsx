import React from "react";
import { countries } from "../countries";
const SupportedCountry = () => {
  return (
    <div>
      <h2 className="text-[#0f3256] font-bold text-2xl lg:text-3xl flex justify-center items-center p-4 lg:p-0">
        Public Holidays for over 230 Countries
      </h2>
      <p className="text-[#0f3256] text-sm font-medium flex justify-center items-center mt-0 lg:mt-2 p-4 lg:p-0">
        Our end-to-end platform offers the most comprehensive holiday and
        working dataset of over 200 countries around the world. Below is the
        list of countries we currently support.
      </p>
      <div className="container mx-auto flex bg-[#f5f5f5] justify-between flex-wrap shadow-md p-6 mt-6">
        {countries.map((country) => {
          return (
            <>
              {country.name === "Select Country" ? (
                ""
              ) : (
                <div className="flex items-center w-full md:w-1/2 lg:w-1/3">
                  <span className="text-[#e83e8c] w-[20px]">
                    {country.code}
                  </span>

                  <img
                    src={country.flag}
                    alt="Flag"
                    className="w-[16px] h-[16px] mx-2"
                  />
                  <span className="text-[#0f3256] text-md">{country.name}</span>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SupportedCountry;
