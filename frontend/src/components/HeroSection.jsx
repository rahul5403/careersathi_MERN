import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#3887e0] font-medium">
          Top Career Search Engine
        </span>
        <h1 className="text-5xl font-bold">
          Discover, Apply & <br />
          Achieve Your <span className="text-[#3887e0]">Career Goals</span>
        </h1>
        <p style={{ width: "70%", margin: "0 auto" }}>
          CarrerSathi connects employers with job seekers, allowing companies to
          post job openings and candidates to apply for positions. It features
          user-friendly interfaces for job search, profile creation, resume
          uploads, and application tracking. It may also offer job
          recommendations, interview scheduling, and skill assessments to
          enhance the recruitment process.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 rounded-full items-center mx-auto overflow-hidden">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full px-4 py-2"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#3887e0] flex items-center justify-center h-full px-4"
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
