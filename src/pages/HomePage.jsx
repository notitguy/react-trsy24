import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings jobsCount={3} header="Browse Jobs" />
      <ViewAllJobs />
    </>
  );
};
export default HomePage;
