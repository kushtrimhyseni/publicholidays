import React from "react";
const SelectCountry = ({ options, onChange, disabledIndex }) => {
  return (
    <div className="flex justify-end">
      <div className="flex items-center mb-3 xl:w-96">
        <select
          onChange={onChange}
          className="form-select appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-[#8c8c8c]
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-[#e9ecef]
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        >
          {options.map((option, index) => {
            return (
              <option
                selected={index === disabledIndex}
                disabled={index === disabledIndex}
                key={option.code}
                value={option.code}
              >
                {option.name}
              </option>
            );
          })}
        </select>
        <select
          class="form-select
            appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-[#e9ecef] bg-clip-padding bg-no-repeat
            border border-solid border-[#e9ecef]
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ml-2"
          aria-label="Disabled select example"
          disabled
        >
          <option selected>Year: 2023</option>
        </select>
      </div>
    </div>
  );
};

export default SelectCountry;
