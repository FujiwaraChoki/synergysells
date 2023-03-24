import { config } from "../landing.config"
import { useState } from "react"

const Footer = () => {
    const [email, setEmail] = useState("");
    const [response, setResponse] = useState(null);

    const subscribe = async (e) => {
        e.preventDefault();
        setResponse({
            success: false,
            message: 'You have successfully subscribed to Our Newsletter!'
        })
        console.log(email);
        console.log(response)
    }


    return (
        <footer className="bg-white">
            <div className="bg-indigo-500 py-6">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                        <div className="mb-3 text-center md:mb-0 md:text-left">
                            <span className="font-bold uppercase tracking-widest text-gray-100">Newsletter</span>
                            <p className="text-indigo-200">Subscribe to our newsletter</p>
                        </div>

                        <form className="flex w-full gap-2 md:max-w-md" onSubmit={subscribe}>
                            <input type="email" onChange={(e => setEmail(e.target.value))} placeholder="Email" className="w-full flex-1 rounded border border-white bg-indigo-400 px-3 py-2 text-white placeholder-indigo-100 outline-none ring-indigo-300 transition duration-100 focus:ring" />

                            <button className="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-indigo-600 md:text-base" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            {
                // Success or error message
                response.success ? (
                    <div class="mt-5 flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Info</span>
                        <div>
                            <span class="font-medium">Success!</span> You're now subscribed to our newsletter.
                        </div>
                    </div>
                ) : (
                    <div class="mt-5 flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Info</span>
                        <div>
                            <span class="font-medium">Something went wrong!</span> Please try again later.
                        </div>
                    </div>
                )
            }

            <div className="pt-12 lg:pt-16">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
                        <div className="col-span-full lg:col-span-2">
                            <div className="mb-4 lg:-mt-2">
                                <a href="/" className="text-black-800 inline-flex items-center gap-2 text-xl font-bold md:text-2xl" aria-label="logo">
                                    <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-5 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                                    </svg>

                                    SynergySells
                                </a>
                            </div>

                            <p className="mb-6 text-gray-500 sm:pr-8">{config.footer.description}</p>

                            <div className="flex gap-4">
                                <a href={config.footer.social.twitter} target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>

                                <a href={config.footer.social.linkedin} target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>

                                <a href={config.footer.social.github} target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Products</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie settings</a>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="border-t py-8 text-center text-sm text-gray-400">© 2021 - Present SynergySells. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
