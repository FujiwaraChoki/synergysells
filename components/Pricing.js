const Pricing = () => {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12" id="pricing">
            <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Pricing</h2>

                <div class="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
                    <div class="flex flex-col overflow-hidden rounded-lg border sm:mt-8">
                        <div class="h-2 bg-pink-500"></div>

                        <div class="flex flex-1 flex-col p-6 pt-8">
                            <div class="mb-12">
                                <div class="mb-2 text-center text-2xl font-bold text-gray-800">Free Trial</div>

                                <p class="mb-8 px-8 text-center text-gray-500">For individuals and organizations who want to try our system</p>

                                <div class="space-y-4">
                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">1.000 MB file storage</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">2.000 MB bandwidth per month</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">200 tasks per month</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">Comunity support</span>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-auto">
                                <a href="#" class="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">$0 / Free</a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col overflow-hidden rounded-lg border-2 border-indigo-500">
                        <div class="bg-indigo-500 py-2 text-center text-sm font-semibold uppercase tracking-widest text-white">Popular choise</div>

                        <div class="flex flex-1 flex-col p-6 pt-8">
                            <div class="mb-12">
                                <div class="mb-2 text-center text-2xl font-bold text-gray-800">Team</div>

                                <p class="mx-auto mb-8 px-8 text-center text-gray-500">Avanced feaures for Individuals and organizations</p>

                                <div class="space-y-4">
                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">Unlimited file storage</span>
                                    </div>

                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">10 GB bandwidth per month</span>
                                    </div>

                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">10.000 tasks per month</span>
                                    </div>

                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">Email support</span>
                                    </div>

                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">100 Webhooks</span>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-auto">
                                <a href="#" class="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">$19</a>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col overflow-hidden rounded-lg border lg:mt-8">
                        <div class="h-2 bg-gray-800"></div>

                        <div class="flex flex-1 flex-col p-6 pt-8">
                            <div class="mb-12">
                                <div class="mb-2 text-center text-2xl font-bold text-gray-800">Enterprise</div>

                                <p class="mx-auto mb-8 px-8 text-center text-gray-500">Maximum performace for organisations</p>

                                <div class="space-y-4">
                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">Unlimited file storage</span>
                                    </div>

                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">Unlimited bandwidth per month</span>
                                    </div>

                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">1.000.000 tasks per month</span>
                                    </div>

                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">Email and phone support</span>
                                    </div>

                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                                            <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                                        </svg>

                                        <span class="text-gray-600">Unlimited Webhooks</span>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-auto">
                                <a href="#" class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">$49</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
