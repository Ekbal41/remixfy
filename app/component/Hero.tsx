export default function Hero(){
    return(
        <>

    <div className="container mt-8 md:mt-0 mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <p className="md:text-4xl text-2xl text-blue-500 font-bold">Welcome to</p>
            <h1
                className=" text-blue-500 capitalize font-extrabold leading-9 tracking-tight mb-3   text-4xl sm:leading-10 md:text-7xl md:leading-normal">
               The Portfolio
            </h1>
            <p className="mb-8 md:pl-0 text-2xl  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                Short description here, Short description here Short description here Short description here Short
                description here Short description here.
            </p>
            <div className="flex justify-center">
                <a href="#"
                    className="flex-shrink-0 px-4 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
                   Skills
                </a>
                <a href="#"
                    className="flex-shrink-0 px-4 py-3 text-base font-semibold text-blue-500 mx-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-200">
                    Message
                    </a>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"/>
        </div>
    </div>

        
        </>
    )
}