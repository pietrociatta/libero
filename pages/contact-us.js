import React, { useState } from "react"
import { useRouter } from "next/router"
import {
  ArrowDown,
  BarChart2,
  Check,
  ChevronDown,
  Send,
  Target,
} from "lucide-react"
import { motion } from "framer-motion"

import "leaflet/dist/leaflet.css"
import dynamic from "next/dynamic"
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  {
    ssr: false,
  }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  {
    ssr: false,
  }
)
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  {
    ssr: false,
  }
)
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
})

const TypewriterText = ({ text }) => {
  const textArray = text.split("")
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Add this to ensure animation runs once per page load
      variants={container}
      className="text-white text-center text-[57px] leading-[60px]"
    >
      {textArray.map((char, index) => (
        <motion.span key={index} variants={child}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  )
}

const Contact = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const position = [35.8989, 14.5146]
  return (
    <div className="flex h-full w-full overflow-x-hidden flex-col items-center  justify-between ">
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
        className={`flex  w-full    bg-cover  bg-center flex-col items-center  justify-between py-10 `}
      >
        <div className="z-10 max-w-7xl w-full items-center justify-between  text-sm lg:flex lg:flex-col">
          <header className="w-full text-black px-8 flex border-b pb-8 border-black/30 justify-between items-center">
            <img src="/images/logo2.png" alt="" className="max-w-[130px]" />
            {/* Hamburger icon */}
            <div className="sm:hidden">
              <button onClick={toggleMenu}>
                <svg
                  className="w-8 h-8 text-black"
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
                <a href="/" className="">
                  Home
                </a>
              </li>
              <li className="hover:underline underline-offset-8">
                <a href="/about-us" className="">
                  Why Libero
                </a>
              </li>
              <li className="hover:underline underline-offset-8">
                <a href="/contact-us" className="">
                  Contact Us
                </a>
              </li>
            </ul>
          </header>
          <div className="pt-20  max-w-4xl px-5 md:px-0 flex flex-col  items-center justify-center ">
            <h1 className="text-black text-center  md:text-[72px] text-[50px] sm:text-[40px] md:leading-[85px] sm:leading-[65px] leading-[50px] font-semibold">
              Contact Us
            </h1>
            <ChevronDown
              onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }}
              className="text-black cursor-pointer w-10 h-10 mt-10"
            />
          </div>
        </div>
      </div>
      <div className="pt-14 pb-14 bg-white text-black w-full flex flex-col items-center">
        <div className="w-full  mx-auto">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "600px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Your business location. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="pt-14 pb-28 md:px-10 px-5 bg-white text-black w-full flex flex-col ">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex md:flex-row flex-col w-full md:items-center items-center gap-10 justify-center">
            <div className="md:w-1/2">
              <h1 className="text-black text-[57px] leading-[60px] ">
                Get in touch with us
              </h1>
              <p className="text-black/70 text-[17px] mt-10">
                We are here to help you with any queries you may have. Please
                fill in the form below and we will get back to you as soon as
                possible.
              </p>
            </div>
            <div className="md:w-1/2">
              <form action="" className="w-full">
                <div className="grid grid-cols-2 gap-5 mt-10">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Full Name"
                    className="p-4 border border-black/30 w-full"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email Address"
                    className="p-4 border border-black/30 w-full"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Phone Number"
                    className="p-4 border border-black/30 w-full"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Company Name"
                    className="p-4 border border-black/30 w-full"
                  />
                  <textarea
                    name=""
                    id=""
                    placeholder="Message"
                    className="p-4 border col-span-2 border-black/30 w-full"
                  ></textarea>
                  <button className="bg-[#fa4729] text-white flex items-center  justify-center gap-3 w-full p-4">
                    <Send className="w-5 h-5" />
                    Get in touch
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 pb-28 relative md:px-10 px-5 bg-[url('/images/bg-3.jpg')] bg-cover w-full flex flex-col ">
        <div className="w-full absolute inset-0 bg-black/40"></div>
        <div className="w-full z-10 max-w-7xl mx-auto">
          <div className="flex md:flex-row flex-col w-full md:items-center items-center gap-10 justify-center">
            <div className=" flex flex-col justify-center items-center">
              <TypewriterText text="Elevating Trust, Simplifying Transactions" />

              <button
                onClick={() => router.push("/about-us")}
                className="bg-[#fa4729]  text-[17px] text-white px-8 py-4 mt-10"
              >
                About Us
              </button>
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

export default Contact
