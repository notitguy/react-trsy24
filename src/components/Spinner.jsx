import { ClipLoader } from "react-spinners";
import PacmanLoader from "react-spinners/PacmanLoader";

const Spinner = (loading) => {
  return (
    <div className="grid place-items-center my-4">
      <PacmanLoader loading={loading} color="#374151" />
    </div>
  );
};

export default Spinner;
