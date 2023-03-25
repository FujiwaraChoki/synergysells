import { config } from "../landing.config";
import Link from "next/link";

const ContactForm = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Get in touch</h2>

                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">{config.contact.description}</p>
                </div>
                <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={(e) => {
                    // Get all form data
                    const formData = new FormData(e.target);

                    fetch('https://formspree.io/f/mzbqzodp', {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }).then(response => {
                        console.log(response);
                    }).catch(error => {
                        console.log(error);
                    });
                }}>
                    <div>
                        <label for="first-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">First name*</label>
                        <input name="first-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>

                    <div>
                        <label for="last-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last name*</label>
                        <input name="last-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>

                    <div className="sm:col-span-2">
                        <label for="company" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Company</label>
                        <input name="company" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>

                    <div className="sm:col-span-2">
                        <label for="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email*</label>
                        <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>

                    <div className="sm:col-span-2">
                        <label for="subject" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Subject*</label>
                        <input name="subject" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>

                    <div className="sm:col-span-2">
                        <label for="message" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Message*</label>
                        <textarea name="message" className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
                    </div>

                    <div className="flex items-center justify-between sm:col-span-2">
                        <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>

                        <span className="text-sm text-gray-500">*Required</span>
                    </div>

                    <p className="text-xs text-gray-400">By signing up to our newsletter you agree to our <Link href="/policy/privacy" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</Link>.</p>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
