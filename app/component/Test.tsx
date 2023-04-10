export default function Test() {
  return (
    <>
      <div className="mx-auto w-full bg-white p-8 dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
          <a href="#" className="relative block">
            <img
              alt="profil"
              src="/asif.png"
              className="mx-auto h-40 w-40 rounded-full object-cover "
            />
          </a>
          <div className="w-full md:w-2/3">
            <p className="m-auto w-full text-left text-lg text-gray-600 dark:text-white md:w-2/3 md:text-3xl">
              <span className="font-bold text-indigo-500">“</span>
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
              <span className="font-bold text-indigo-500">”</span>
            </p>
            <div className="mt-8 flex items-center justify-center">
              <span className="mr-2 text-lg font-semibold text-indigo-500">
                Jean Miguel
              </span>
              <span className="text-xl font-light text-gray-400">/</span>
              <span className="text-md ml-2 text-gray-400">
                User of tail-kit
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
