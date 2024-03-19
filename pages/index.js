import { ArrowBigDown, ArrowDown, ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Home() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="flex h-full w-full overflow-x-hidden flex-col items-center  justify-between ">
      {/* Overlay menu */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white text-4xl"
        >
          &times;
        </button>
        <nav className="text-white text-center">
          <ul>
            <li className="p-4 text-2xl">
              <a href="/" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="p-4 text-2xl">
              <a href="/about-us" onClick={toggleMenu}>
                Why Libero
              </a>
            </li>
            <li className="p-4 text-2xl">
              <a href="/contact-us" onClick={toggleMenu}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`flex min-h-screen w-full  bg-[url('/images/bg.jpeg')]  bg-cover  bg-center flex-col items-center  justify-between py-10 `}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
        <div className="z-10 max-w-7xl w-full items-center justify-between  text-sm lg:flex lg:flex-col">
          <header className="w-full px-8 flex border-b pb-8 border-white/30 justify-between items-center">
            <img src="/images/logo.png" alt="" className="max-w-[130px]" />
            {/* Hamburger icon */}
            <div className="sm:hidden">
              <button onClick={toggleMenu}>
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Existing menu for larger screens */}
            <ul className=" gap-10 sm:flex hidden font-outfit  text-base">
              <li className="hover:underline underline-offset-8">
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li className="hover:underline underline-offset-8">
                <a href="/about-us" className="text-white">
                  Why Libero
                </a>
              </li>
              <li className="hover:underline underline-offset-8">
                <a href="/contact-us" className="text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </header>

          <div className="py-32 max-w-4xl px-5 md:px-0 flex flex-col ">
            <h1 className="text-white md:text-[92px] text-[40px] sm:text-[60px] md:leading-[85px] sm:leading-[65px] leading-[50px] font-bold">
              Pioneering Escrow <br /> Innovation for a <br /> Connected World
            </h1>
            <div className="flex items-center  gap-8 justify-start md:w-full w-1/6">
              <ArrowDown
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }}
                size={182}
                color="white"
              />
              <span className="text-white text-lg md:flex hidden  font-extralight">
                We believe that secure transactions should be at the heart of
                every online interaction. That’s why we’ve set out to
                revolutionize the escrow industry by merging the time-honored
                principles of traditional escrow services
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 pb-28 md:px-10 px-5 bg-[#0f0658] w-full flex flex-col ">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex md:flex-row flex-col w-full md:items-center items-start gap-10 justify-between">
            <div className="md:w-1/2">
              <h2 className="text-white text-[14px] leading-[50px] font-bold">
                LIBERO ESCROW
              </h2>
              <h1 className="text-white text-[57px] leading-[70px] ">
                Redefining Escrow for a Digital Age
              </h1>
            </div>
            <p className="text-white text-[17px] md:w-1/2 md:pt-40">
              We believe that secure transactions should be at the heart of
              every online interaction. That’s why we’ve set out to
              revolutionize the escrow industry by merging the time-honored
              principles of traditional escrow services with the power of
              advanced technology.
              <br /> <br />
              With Libero International, you can transact confidently, knowing
              that your funds and assets are protected by a trusted and
              efficient escrow process.
            </p>
          </div>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 pt-20 justify-between items-center w-full">
            <div className="flex md:border-r border-white/40 flex-col gap-4">
              <img src="/images/4.png" alt="" className="max-w-[90px] mb-5" />
              <h3 className="text-white text-[22px] leading-[30px] ">
                Secure <br /> Business Negotiations
              </h3>
              <ArrowRight size={32} color="white" />
            </div>
            <div className="flex flex-col md:border-r border-white/40 gap-4">
              <img src="/images/3.png" alt="" className="max-w-[90px] mb-5" />
              <h3 className="text-white text-[22px] leading-[30px] ">
                Protected <br /> Mergers & Acquisitions
              </h3>
              <ArrowRight size={32} color="white" />
            </div>
            <div className="flex md:border-r border-white/40 flex-col gap-4">
              <img src="/images/2.png" alt="" className="max-w-[90px] mb-5" />
              <h3 className="text-white text-[22px] leading-[30px] ">
                Safeguarded <br /> Real Estate Transactions
              </h3>
              <ArrowRight size={32} color="white" />
            </div>
            <div className="flex flex-col gap-4">
              <img src="/images/1.png" alt="" className="max-w-[90px] mb-5" />
              <h3 className="text-white text-[22px] leading-[30px] ">
                Smart <br /> Money Transfers
              </h3>
              <ArrowRight size={32} color="white" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 pb-28 md:px-10 px-5 bg-white text-black w-full flex flex-col ">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex  lg:flex-row flex-col w-full md:items-start items-start gap-10 justify-between">
            <div className="lg:max-w-[500px]">
              <img src="/images/person1.jpeg" alt="" />
            </div>
            <div className="lg:w-1/2">
              <h2 className=" text-[14px] leading-[50px] font-bold">
                INDUSTRY LEADING
              </h2>
              <h1 className=" text-[50px] leading-[50px] ">
                We specialize in facilitating fast and secure transactions
                ranging from $10k to $50 million
              </h1>
              <p className=" text-[17px] mt-10">
                With our trusted escrow services, you can confidently engage in
                high-value transactions, knowing that your funds and assets are
                protected every step of the way.
              </p>
            </div>
          </div>
          <div className="lg:-mt-[300px] mt-10 w-full flex justify-end ">
            <img
              src="/images/person2.jpeg"
              alt=""
              className="lg:max-w-[650px]  w-full"
            />
          </div>
        </div>
      </div>
      <div className="pt-14 pb-28 md:px-10 px-5 bg-[#0f0658] w-full flex flex-col ">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex md:flex-row flex-col w-full md:items-center items-start gap-10 justify-between">
            <div className="md:w-1/2">
              <h2 className="text-white text-[14px] leading-[50px] font-bold">
                THE ANALYSIS
              </h2>
              <h1 className="text-white text-[57px] leading-[60px] ">
                Since 2013, we have set the new industry standard for secure
                payments
              </h1>
              <p className="text-white/70 text-[17px] mt-10">
                With Libero International, you can experience peace of mind
                throughout the entire transaction process. Our dedicated team of
                escrow experts is committed to providing transparent
                communication, regular updates, and exceptional customer
                service.
                <br /> <br />
                We are here to address any concerns you may have and ensure a
                smooth and secure transaction from start to finish.
              </p>
              <button
                onClick={() => {
                  router.push("/about-us")
                }}
                className="bg-[#fa4729] text-[17px] text-white px-8 py-4 mt-10"
              >
                About Libero
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="/images/finance.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 pb-28 md:px-10 px-5 bg-white text-black w-full flex flex-col ">
        <div className="w-full mt-20 flex flex-col items-center justify-center max-w-7xl mx-auto">
          <h1 className="text-center text-[22px]">
            Since we have been offering our clients payment through Libero, we
            have had significantly fewer payment defaults. The escrow service
            creates trust on both sides. The handling is simple, but should
            there be any difficulties, the support is very fast and effective.
            We are highly satisfied and proudly recommend the Libero service to
            others.
          </h1>
          <p className="flex flex-col mt-10 items-center justify-center">
            <span className="font-bold text-[22px]">John Doe</span>
            CEO, Company Name
          </p>
        </div>
        <div className="w-full max-w-7xl mx-auto mt-32">
          <div className="flex  lg:flex-row flex-col w-full md:items-center items-start gap-10 justify-between">
            <div className="lg:max-w-[500px]">
              <img src="/images/person3.jpeg" alt="" />
            </div>
            <div className="lg:w-1/2">
              <h2 className=" text-[14px] leading-[50px] font-bold">
                WHAT WE OFFER
              </h2>
              <h1 className=" text-[50px] leading-[50px] ">
                Libero is licensed, regulated and frequently audited.
              </h1>
              <p className=" text-[17px] text-black/70 mt-10">
                Government agencies perform regular audits of independently
                licensed escrow companies. The audit examinations serve to
                protect public funds, determine safety and soundness of
                operations and determine compliance with escrow statutes and
                regulations.
              </p>
              <ul className="flex flex-col gap-4 mt-10">
                <li className="flex  gap-4 items-center">
                  <Check size={22} color="black" />
                  <span className="text-[17px] ">Internation Trade</span>
                </li>
                <li className="flex  gap-4 items-center">
                  <Check size={22} color="black" />
                  <span className="text-[17px] ">
                    Buying and Seller Protection
                  </span>
                </li>
                <li className="flex gap-4 items-center">
                  <Check size={22} color="black" />
                  <span className="text-[17px] ">No Hidden Fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 pb-14 md:px-10 px-5 bg-[#0f0658] w-full flex flex-col ">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex md:flex-row flex-col w-full md:items-center items-start gap-10 justify-between">
            <div className="md:w-1/2">
              <h1 className="text-white text-[57px] leading-[60px] ">
                Elevating Trust,
                <br />
                Simplifying Transactions
              </h1>
            </div>
            <div className="md:w-1/2"></div>
          </div>
          <div className="grid sm:grid-cols-3 gap-10 grid-cols-1 md:mt-14 w-full">
            <div className="w-full">
              <h3 className="text-white text-[22px] leading-[30px] font-bold">
                Head Office
              </h3>
              <p className="text-white/70 text-[17px] mt-5">
                First Floor <br />
                Dun Karm Street <br />
                Birkirkara BKR 9033 <br />
                Malta
              </p>
            </div>
            <div className="w-full">
              <h3 className="text-white text-[22px] leading-[30px] font-bold">
                Contact Libero
              </h3>
              <p className="text-white/70 underline-offset-4 underline text-[17px] mt-5">
                enquiries@libero-partners.com <br />
                publicrelations@libero-partners.com <br />
              </p>
            </div>
            <div>
              <h3 className="text-white text-[22px] leading-[30px] font-bold">
                Subscribe to our Newsletter
              </h3>

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email"
                className="bg-transparent p-4 text-white/40 outline-none w-full mt-5 border-b border-white/30"
              />
            </div>
          </div>
          <div className="w-full mt-20 h-[1px] bg-white/30"></div>
          <p className="w-full flex justify-between">
            <span className="text-white/40 font-normal text-[17px] mt-10">
              Libero International SICAV plc © 2013 – 2024. All Rights Reserved
              | Firm Reference Number #612245
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
