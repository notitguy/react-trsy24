import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ jobsCount, header }) => {
  // const jobs = jobsCount ? jobsData.slice(0, jobsCount) : jobsData;
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`/api/jobs?_limit=${jobsCount}`);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setloading(false);
      }
    };
    setTimeout(() => {
      fetchJobs();
    }, 1000);
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {header}
        </h2>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default JobListings;
