export default function Navbar() {
  return (
    <>
    <div className=" pt-4">
      <header className="z-40 h-16  items-center rounded-2xl bg-white shadow-lg dark:bg-gray-800 md:mx-12 mx-4 ">
        <div className="flex-center relative z-20 mx-auto flex h-full flex-col justify-center px-3 ">
          <div className="lg:max-w-68 relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
            <div className="container relative left-0 z-50 flex h-auto h-full w-3/4">
              <div className="group relative flex h-full w-full items-center lg:w-64">
                <div className="absolute z-50 block flex h-10 w-auto cursor-pointer items-center justify-center p-3 pr-2 text-sm uppercase text-gray-500 sm:hidden">
                  <svg
                    fill="none"
                    className="relative h-5 w-5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <svg
                  className="pointer-events-none absolute left-0 z-20 ml-4 hidden h-4 w-4 fill-current text-gray-500 group-hover:text-gray-400 sm:block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
                <input
                  type="text"
                  className="aa-input block w-full rounded-2xl bg-gray-100 py-1.5 pl-10 pr-4 leading-normal text-gray-400 ring-opacity-90 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  placeholder="Search"
                />
                <div className="absolute right-0 mr-2 hidden h-auto rounded-2xl border border-gray-300 px-2 py-1 text-xs text-gray-400 md:block">
                  +
                </div>
              </div>
            </div>
            <div className="relative ml-5 mr-4 flex w-1/4 items-center justify-end p-1 sm:right-auto sm:mr-0">
              <a href="#" className="relative block">
                <img
                  alt="profil"
                  src="/asif.png"
                  className="mx-auto h-10 w-10 rounded-full object-cover "
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      </div>
    </>
  );
}
