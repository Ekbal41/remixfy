import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Feature from "../component/Feature";
import About from "../component/About";
import Blog from "../component/Blog";
import Test from "../component/Test";
import Fet from "../component/Fet";


export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <div className="bg-gray-200 ">
        <div className="container mx-auto bg-gray-200">
          <Navbar />
          <Hero />
          <Feature />
          <About />
          <Fet/>

          <Blog />
          <Test />
          {/* <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
          {user ? (
            <Link
              to="/notes"
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
            >
              View Notes for {user.email}
            </Link>
          ) : (
            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
              <Link
                to="/join"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
              >
                Sign up
              </Link>
              <Link
                to="/login"
                className="flex items-center justify-center rounded-md bg-indigo-500 px-4 py-3 font-medium text-white hover:bg-indigo-600  "
              >
                Log In
              </Link>
            </div>
          )}
        </main>
        <Footer /> */}
        </div>
      </div>
    </>
  );
}
