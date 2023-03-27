import Features from '../components/Features';
import Pricing from '../components/Pricing';
import CookiesAccept from '../components/CookiesAccept';
import Image from 'next/image';
import { config } from '../landing.config';

const LandingPage = () => {
  const renderFaq = (question) => {
    return (
      <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
        <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
        </span>

        <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">{question.q}</h3>
        <p className="text-gray-500">{question.a}</p>
      </div>
    )
  }

  return (
    <>
      {
        // Cookies accept
        <CookiesAccept />
      }
      <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
        <Image src={config.hero.image} loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center" width={1500} height={1000} />

        <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>

        <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
          <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p>
          <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">{config.hero.big_desc}</h1>

          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">{config.hero.start}</a>

            <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">{config.hero.tour}</a>
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
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">FAQ</h2>

                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Here you&apos;ll find answers to all FAQ about SynergySells.</p>
                <br />
                <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
                  {
                    config.faq.map((question) => renderFaq(question))
                  }
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
