import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <>
      <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
        <Image src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center" />

        <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>

        <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
          <p class="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p>
          <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Revolutionary way to manage Sales</h1>

          <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <a href="#" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>

            <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
          </div>
        </div>
      </section>
      {
        // Features
        <Features />
      }
      {
        // Pricing
        <Pricing />
      }
      {
        // FAQ
        (
          <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div class="mb-10 md:mb-16">
                <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">FAQ</h2>

                <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Here you'll find answers to all FAQ about SynergySells.</p>
              </div>

              <div class="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
                <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
                  <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                    </svg>
                  </span>

                  <h3 class="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">How does the product work?</h3>
                  <p class="text-gray-500">SynergySells is an AI-powered sales tool that generates compelling sales pitches that close deals in real-time.</p>
                </div>

                <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
                  <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                    </svg>
                  </span>

                  <h3 class="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">What are the features?</h3>
                  <p class="text-gray-500">The main feature of SynergySells is the AI-powered copywriting tool that helps generate sales copy quickly and easily.</p>
                </div>

                <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
                  <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                    </svg>
                  </span>

                  <h3 class="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">What about integrations?</h3>
                  <p class="text-gray-500">SynergySells integrates with popular CRM and marketing tools such as Salesforce and Mailchimp.</p>
                </div>

                <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
                  <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                    </svg>
                  </span>

                  <h3 class="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">Is support available?</h3>
                  <p class="text-gray-500">Support is available 24/7 through email and chat.</p>
                </div>

                <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
                  <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                    </svg>
                  </span>

                  <h3 class="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">How does one upgrage a plan?</h3>
                  <p class="text-gray-500">Users can upgrade their plan at any time from their account dashboard.</p>
                </div>

                <div class="relative rounded-lg bg-gray-100 p-5 pt-8">
                  <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                    </svg>
                  </span>

                  <h3 class="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">Which payment methods are available?</h3>
                  <p class="text-gray-500">SynergySells accepts all major credit cards and PayPal for payment.</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default LandingPage;
