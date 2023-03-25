import { config } from '../landing.config'

const Features = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12" id="features">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Features</h2>

                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">{config.features.description}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    <div className="flex flex-col rounded-lg border p-4 md:p-6">
                        <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold md:text-xl">Growth</h3>
                        <p className="mb-4 text-gray-500">{config.features?.growth}</p>
                        <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
                    </div>
                    <div className="flex flex-col rounded-lg border p-4 md:p-6">
                        <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold md:text-xl">Security</h3>
                        <p className="mb-4 text-gray-500">{config.features.security}</p>
                        <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
                    </div>
                    <div className="flex flex-col rounded-lg border p-4 md:p-6">
                        <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold md:text-xl">Cloud</h3>
                        <p className="mb-4 text-gray-500">{config.features.cloud}</p>
                        <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
                    </div>
                    <div className="flex flex-col rounded-lg border p-4 md:p-6">
                        <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold md:text-xl">Speed</h3>
                        <p className="mb-4 text-gray-500">{config.features.speed}</p>
                        <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
                    </div>
                    <div className="flex flex-col rounded-lg border p-4 md:p-6">
                        <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold md:text-xl">Support</h3>
                        <p className="mb-4 text-gray-500">{config.features.support}</p>
                        <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
                    </div>
                    <div className="flex flex-col rounded-lg border p-4 md:p-6">
                        <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold md:text-xl">Dark Mode</h3>
                        <p className="mb-4 text-gray-500">{config.features.dark_mode}</p>
                        <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
