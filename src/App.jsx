import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";

import Card from "./components/Card";

import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [weather, setweather] = useState(null);
  const [loading, setLoading] = useState(false);

  const key = "96ac50d127d44e1b9f2134845241409";
  const API_URL = "https://api.weatherapi.com/v1/current.json"; 
  const getWeatherInfo = async () => {
    setLoading(true);
    const url = `${API_URL}?key=${key}&q=${data}&aqi=yes`;
    const res = await fetch(url);
    const result = await res.json();
    console.log(url, "   ->>>>  ", result);
    const Data = {
      location: result.location.name,
      country: result.location.country,
      feelsLike: result.current.feelslike_c,
      humidity: result.current.humidity,
      temperature: result.current.temp_c,
      wind_dir: result.current.wind_dir,
      condition: result.current.condition.text,
      time: result.location.localtime,
    };
    console.log(Data);
    setweather(Data);
    setLoading(false);
  };

  const handeler = (evnt) => {
    setData(evnt.target.value);
  };

  const onSubmitHandeler = (evt) => {
    evt.preventDefault();
    getWeatherInfo();
    console.log(data);
    setData("");
  };

  return (
    <div className="bg-[url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg)] bg-cover">
      <div className="  h-[100vh] bg-white/10 flex flex-col gap-[4rem] justify-center items-center">
      <h1 className="font-bold text-[4rem] font-thin">Weather Info</h1>
        <form
          className=" flex items-center justify-center"
          onSubmit={onSubmitHandeler}
        >
          <input
            className="text-black text-xl bg-white/30 pr-[3rem] w-[20rem] md:w-[30rem] p-2 pl-[1rem] rounded-3xl"
            value={data}
            placeholder="Search Location"
            onChange={handeler}
          />
          <button
            className="relative z-10  hover:text-blue-500 right-[3rem] text-black "
            type="submit  "
          >
            {" "}
            <IoIosSearch className="text-[1.5rem]" />
          </button>
        </form>

        <div className="">
          {!weather ? (
            <div className=" w-[10rem]"></div>
          ) : loading ? (
            <div className="h-[30rem] w-[30rem] flex justify-center items-center">
              {" "}
              <div className="loader"></div>
            </div>
          ) : (
            <Card weather={weather} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
