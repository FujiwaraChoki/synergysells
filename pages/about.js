const AboutPage = () => {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
                    <div>
                        <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                            <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
                        </div>
                    </div>

                    <div class="md:pt-8">
                        <p class="text-center font-bold text-indigo-500 md:text-left">Who we are</p>

                        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Our competitive advantage</h1>

                        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                            SynergySells is a cutting-edge platform designed to help businesses streamline their sales management process. With a wide range of features, SynergySells is the perfect solution for businesses of any size looking to grow their sales and improve their bottom line.

                            We take pride in offering our customers a user-friendly, cloud-based application that is accessible from anywhere, anytime.
                            Our platform is fast, secure, and equipped with the latest technologies to ensure that your data is always available and safe.

                            At SynergySells, we are committed to providing our customers with exceptional service and support.</p>

                        <h2 class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">About us</h2>

                        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">Our team of experts is available 24/7 to help answer any questions you may have and to ensure that you are getting the most out of our platform.

                            We understand the importance of privacy and take the protection of your personal information very seriously. Our Privacy Policy is designed to ensure that your information is kept confidential and is only used in accordance with your consent.

                            Thank you for choosing SynergySells as your sales management partner. We are committed to your success and look forward to helping your business grow.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
