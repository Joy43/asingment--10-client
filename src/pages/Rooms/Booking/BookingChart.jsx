

const BookingChart = () => {
    return (
        <div>
           <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div className="flex items-center">
                        <div className="">
                            <img
                            className="h-[83px] w-[83px] rounded-lg"
                            src="https://github.com/horizon-ui/horizon-tailwind-react-ts-corporate/blob/main/src/assets/img/profile/image1.png?raw=true"
                            alt=""
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-base font-medium text-navy-700 dark:text-white">
                            Technology behind the Blockchain
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                            Project #1 .
                            <a
                                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                                href=" "
                            >
                                See product details
                            </a>
                            </p>
                        </div>
                        </div>
                        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z"></path>
                        </svg>
                        </div>
                    </div> 
        </div>
    );
};

export default BookingChart;