import { useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { TbPigMoney } from "react-icons/tb";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [showFullDescription, setFullDescription] = useState(false);
  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "..";
  }
  const setDescription = () => {
    setFullDescription((toggle) => !toggle);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm relative">
      <div className="p-4 flex flex-col">
        <div className="mb-2">
          <div className="text-sm text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>
        <div className="font-mono">{description}</div>
        <button
          onClick={setDescription}
          className="text-sm italic ml-auto text-gray-600 hover:text-indigo-600"
        >
          {showFullDescription ? "- less" : "+ more"}
        </button>
        <h3 className="mb-2">
          <TbPigMoney className="inline text-xl text-indigo-500 mb-1 mr-2" />
          <span className="text-rose-600 font-bold">{job.salary}</span>
          <span className="text-sm">/year</span>
        </h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-gray-500 text-sm font-medium mb-3">
            <LuMapPin className="inline mb-1 mr-1" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
