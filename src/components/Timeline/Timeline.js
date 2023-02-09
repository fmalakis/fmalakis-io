const Timeline = () => {
    return (
        <>
            <ol class="items-start sm:flex bg-zinc-900 rounded-lg py-6 card p-12">
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                            <svg
                                aria-hidden="true"
                                class="w-3 h-3 text-blue-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div class="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-lg font-semibold text-white">
                            Computer Science Department, AUTh (BSc)
                        </h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
                            2019 - Today
                        </time>
                        <p class="text-base font-normal text-gray-400">
                            Double Major on Software Engineering, Data and Web
                            Science
                        </p>
                    </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                            <svg
                                aria-hidden="true"
                                class="w-3 h-3 text-blue-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div class="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-lg font-semibold text-white">
                            IT Department, Live Services Team, AUTh
                        </h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
                            November 2021 - June 2022
                        </time>
                        <p class="text-base font-normal text-gray-400 max-w-md">
                            Part of the Live Services team, helped develop and
                            test the open source registrar platform,{" "}
                            <a
                                className="hover:underline text-sky-500"
                                href="https://www.universis.io/"
                            >
                                UniverSIS
                            </a>
                            .
                        </p>
                    </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                            <svg
                                aria-hidden="true"
                                class="w-3 h-3 text-blue-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div class="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-lg font-semibold text-white items-center flex">
                            Deloitte Digital
                            <span class="animate-pulse text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ml-3">
                                Latest
                            </span>
                        </h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
                            June 2022 - Today
                        </time>
                        <p class="text-base font-normal text-gray-400 max-w-md">
                            Started my professional journey as a Business
                            Analyst, working on projects for Maserati and illy,
                            leveraging technologies such as React, Tailwind and
                            Adobe Experience Manager.
                        </p>
                    </div>
                </li>
            </ol>
        </>
    );
};

export default Timeline;
