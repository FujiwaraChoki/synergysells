import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';
import { useContext } from 'react';
import { ActiveTabContext } from '../context/ActiveTab';
import { config } from '../landing.config'
import { useRouter } from 'next/router';

const Navbar = () => {
    const [activeTab, setActiveTab] = useContext(ActiveTabContext);
    const router = useRouter();

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const scrollToSection = (id) => {
        // If the user is on the home page, scroll to the section
        if (router.pathname === '/') {
            scroll.scrollTo(document.querySelector(id).offsetTop);
        } else {
            // If the user is on a different page, redirect to the home page and scroll to the section
            router.push({
                pathname: '/',
                hash: id,
            })
        }
    }

    const isActive = (tabName) => {
        if (tabName === 'contact') {
            // Return make color blue
            return 'text-indigo-500 font-bold';
        }
        return activeTab === tabName ? 'text-indigo-500 font-bold' : 'text-gray-600 font-semibold';
    };

    return (
        <header className="mb-4 flex items-center justify-between py-4 md:py-8">
            <Link href="/" onClick={scrollToTop} className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl" aria-label="logo">
                <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>
                SynergySells
            </Link>

            <nav className="hidden gap-12 lg:flex">
                <Link href="/" onClick={() => {
                    scrollToTop()
                    setActiveTab('home')
                }} className={`text-lg cursor-pointer ${isActive('home')}`}>Home</Link>
                <Link href="#features" onClick={() => {
                    scrollToSection('#features')
                    setActiveTab('features')
                }} className={`text-lg cursor-pointer transition duration-100 hover:text-indigo-500 active:text-indigo-700 ${isActive('features')}`}>Features</Link>
                <Link href="#pricing" onClick={() => {
                    scrollToSection('#pricing')
                    setActiveTab('pricing')
                }} className={`text-lg cursor-pointer transition duration-100 hover:text-indigo-500 active:text-indigo-700 ${isActive('pricing')}`}>Pricing</Link>
                <Link href="/about" className={`text-lg cursor-pointer transition duration-100 hover:text-indigo-500 active:text-indigo-700 ${isActive('about')}`}>About</Link>
            </nav>


            <Link href={config.footer.support.contact} onClick={() => {
                setActiveTab('contact')
            }} className={`hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block ${isActive('about')}`}>Contact Sales</Link>

            <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
        </header >
    );
}

export default Navbar;
