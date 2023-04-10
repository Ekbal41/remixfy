export default function () {
  return (
    <>
      <div className="mt-24 w-full p-12 md:mt-48">
        <div className="header mb-12 flex flex-col items-end justify-between md:mx-12 md:flex-row">
          <div className="title text-center sm:text-left">
            <p className="mb-1 text-3xl font-bold leading-9 text-blue-500 md:text-5xl ">
              Lastest blogs
            </p>
            <p className="mdtext-2xl text-xl  ">
              Lorem ipsum dolor sitia ipsum dolor sitia{" "}
              <span className="font-bold text-blue-500 md:text-5xl"> .</span>
            </p>
          </div>
          <div className="text-end">
            <form className="mr-48 mt-4 flex  w-full max-w-sm flex-col justify-center space-y-3 md:mr-0 md:mt-0 md:w-full md:flex-row md:space-x-3 md:space-y-0">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Search'
                  className=" w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter a title"
                />
              </div>
              <button
                className="flex-shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-base font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="h-90 m-auto w-80 cursor-pointer  overflow-hidden rounded-lg shadow-lg md:w-96">
            <a href="#" className="block h-full w-full">
              <div className="">
                <img
                  alt="blog photo"
                  src="/blog.jpg"
                  className="max-h-60 w-full object-cover"
                />
              </div>
              <div className="w-full bg-white p-4 dark:bg-gray-800">
                <p className="text-md font-medium text-blue-500">Video</p>
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  Work at home boy
                </p>
                <p className="text-md font-light text-gray-400 dark:text-gray-300">
                  Work at home, remote, is the new age of the job, every person
                  can work at home....
                </p>
                <div className="mt-4 flex items-center">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/asif.png"
                      className="mx-auto h-10 w-10 rounded-full object-cover "
                    />
                  </a>
                  <div className="ml-4 flex flex-col justify-between text-sm">
                    <p className="text-gray-800 dark:text-white">
                      Jean Jacques
                    </p>
                    <p className="text-gray-400 dark:text-gray-300">
                      20 mars 3047 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="h-90 m-auto w-80 cursor-pointer  overflow-hidden rounded-lg shadow-lg md:w-96">
            <a href="#" className="block h-full w-full">
              <div className="">
                <img
                  alt="blog photo"
                  src="/blog.jpg"
                  className="max-h-60 w-full object-cover"
                />
              </div>
              <div className="w-full bg-white p-4 dark:bg-gray-800">
                <p className="text-md font-medium text-blue-500">Video</p>
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  Work at home boy
                </p>
                <p className="text-md font-light text-gray-400 dark:text-gray-300">
                  Work at home, remote, is the new age of the job, every person
                  can work at home....
                </p>
                <div className="mt-4 flex items-center">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/asif.png"
                      className="mx-auto h-10 w-10 rounded-full object-cover "
                    />
                  </a>
                  <div className="ml-4 flex flex-col justify-between text-sm">
                    <p className="text-gray-800 dark:text-white">
                      Jean Jacques
                    </p>
                    <p className="text-gray-400 dark:text-gray-300">
                      20 mars 3047 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="h-90 m-auto w-80 cursor-pointer  overflow-hidden rounded-lg shadow-lg md:w-96">
            <a href="#" className="block h-full w-full">
              <div className="">
                <img
                  alt="blog photo"
                  src="/blog.jpg"
                  className="max-h-60 w-full object-cover"
                />
              </div>
              <div className="w-full bg-white p-4 dark:bg-gray-800">
                <p className="text-md font-medium text-blue-500">Video</p>
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  Work at home boy
                </p>
                <p className="text-md font-light text-gray-400 dark:text-gray-300">
                  Work at home, remote, is the new age of the job, every person
                  can work at home....
                </p>
                <div className="mt-4 flex items-center">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/asif.png"
                      className="mx-auto h-10 w-10 rounded-full object-cover "
                    />
                  </a>
                  <div className="ml-4 flex flex-col justify-between text-sm">
                    <p className="text-gray-800 dark:text-white">
                      Jean Jacques
                    </p>
                    <p className="text-gray-400 dark:text-gray-300">
                      20 mars 3047 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
