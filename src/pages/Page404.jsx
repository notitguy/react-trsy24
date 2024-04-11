import { Link } from "react-router-dom";
import { LuAlertCircle } from "react-icons/lu";

const Page404 = () => {
  return (
    <section class="text-center flex flex-col justify-center items-center h-96">
      <LuAlertCircle className="text-6xl text-rose-500 mb-5" />
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        class="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};

export default Page404;
