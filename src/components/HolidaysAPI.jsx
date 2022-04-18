import React, { useState } from "react";
import axios from "axios";
import { countries } from "../countries";
import SelectCountry from "./SelectCountry";
import Spinner from "./Spinner";
const HolidaysAPI = () => {
  const [holidays, setHolidays] = useState([]);
  const [error, setError] = useState("");
  const [isSelected, setSelected] = useState(false);
  const [loading, setLoading] = useState(false);

  const getHolidays = async (selectedCountry) => {
    try {
      const response = await axios.get(
        `https://calendarific.com/api/v2/holidays?&api_key=17a8e511976f0b92b548b63630db87df845bc631&country=${selectedCountry}&year=2022&type=national`
      );
      setHolidays(response.data.response.holidays);
      setError("");
      setLoading();
    } catch (err) {
      setError("No data for this country!");
    }
  };
  const formatDate = (string) => {
    let options = [{ year: "numeric", month: "long", day: "numeric" }];
    return new Date(string).toLocaleDateString([], options);
  };

  const handleSelect = (event) => {
    getHolidays(event.target.value);
    setSelected(true);
    setLoading(true);
  };
  if (!loading) {
    return (
      <div>
        {error ? (
          <div>{error}</div>
        ) : (
          <section className="container mx-auto mt-6 p-6 md:pt-0">
            <SelectCountry
              options={countries}
              onChange={handleSelect}
              disabledIndex={0}
            />
            {isSelected && (
              <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-[#7856ff] uppercase border-b border-gray-600">
                        <th className="px-4 py-3">Holiday</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Details</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {holidays?.map((holiday) => {
                        return (
                          <tr className="text-gray-700">
                            <td className="px-4 py-3 border">
                              <div className="flex items-center text-sm">
                                <div>
                                  <p className="font-semibold text-black">
                                    {holiday.name}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-ms font-semibold border">
                              {formatDate(holiday.date.iso)}
                            </td>
                            <td className="px-4 py-3 text-xs border">
                              <span className="px-2 py-1 font-semibold  text-black text-sm rounded-sm">
                                {holiday.description}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default HolidaysAPI;
