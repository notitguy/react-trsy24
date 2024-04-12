import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { TbPigMoney } from "react-icons/tb";
import CopyText from "../components/CopyText";
import { toast } from "react-toastify";

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm("You sure?");

    if (!confirm) return;
    deleteJob(jobId);
    toast.success("Job deleted");
    navigate("/jobs");
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <LuArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <LuMapPin className="text-orange-700 mr-1 mt-1" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Job Description
                </h3>

                <p className="font-mono">{job.description}</p>
                <hr className="my-4" />
                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <div className="mb-2">
                  <TbPigMoney className="inline text-xl text-indigo-500 mb-1 mr-2" />
                  <span className="text-rose-600 font-bold">{job.salary}</span>
                  <span className="text-sm">/year</span>
                </div>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-sm mb-4">Company Info</h3>

                <h2 className="text-2xl font-semibold">{job.company.name}</h2>

                <p className="font-mono my-2">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-lg font-semibold">Contact Email:</h3>

                <p className="flex items-center justify-between text-sm my-2 bg-indigo-50 px-4 py-3 rounded font-semibold font-mono relative">
                  {job.company.contactEmail}
                  <CopyText text={job.company.contactEmail} />
                </p>

                <h3 className="text-lg font-semibold mt-4">Contact Phone:</h3>

                <p className="flex items-center justify-between text-sm my-2 bg-indigo-50 px-4 py-3 rounded font-semibold font-mono relative">
                  {" "}
                  {job.company.contactPhone}
                  <CopyText text={job.company.contactPhone} />
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
