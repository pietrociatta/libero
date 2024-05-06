import { ArrowDown, BarChart2, Check, ChevronDown, Target } from "lucide-react"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { motion } from "framer-motion"

const TypewriterText = ({ text }) => {
  const textArray = text.split("")
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
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

const About = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
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
        className={`flex min-h-screen w-full  bg-[url('/images/bg2.jpeg')]  bg-cover  bg-center flex-col items-center  justify-between py-10 `}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>
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
          <div className="py-44  max-w-4xl px-5 md:px-0 flex flex-col  items-center justify-center ">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-center  md:text-[72px] text-[50px] sm:text-[40px] md:leading-[85px] sm:leading-[65px] leading-[50px] font-semibold"
            >
              Experience the Future of Escrow with Libero
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <ChevronDown
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth"
                  })
                }}
                className="text-white cursor-pointer w-10 h-10 mt-10"
              />
            </motion.span>
          </div>
        </div>
      </div>
      <div className="pt-14 pb-28 md:px-10 px-5 bg-white text-black w-full flex flex-col ">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex  lg:flex-row flex-col w-full md:items-start items-start gap-10 justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0 }}
              className="lg:max-w-[500px]"
            >
              <img src="/images/person1.jpeg" alt="" />
            </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:-mt-[300px] mt-10 w-full flex justify-end "
          >
            <img
              src="/images/person2.jpeg"
              alt=""
              className="lg:max-w-[650px]  w-full"
            />
          </motion.div>
        </div>
      </div>
      <div className="pt-14 pb-28 md:px-10 px-5 bg-[#0f0658] w-full flex flex-col ">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex md:flex-row flex-col w-full md:items-center items-center gap-10 justify-center">
            <div className=" flex flex-col justify-center items-center">
              <h2 className="text-white text-[14px] leading-[50px] font-bold">
                WHAT WE DO
              </h2>
              <TypewriterText text="Digital escrow at your fingertips for a wide-range of use cases" />

              <p className="text-white/70 text-center text-[17px] mt-10">
                We work hand-in-hand with Businesses to ensure that receiving
                payments and making payments is a transparent and accountable
                process for them, and for their customers.
              </p>
              <button
                onClick={() => router.push("/contact-us")}
                className="bg-[#fa4729]  text-[17px] text-white px-8 py-4 mt-10"
              >
                Get Started with Libero
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 pb-28 md:px-10 px-5 bg-white text-black w-full flex flex-col ">
        <div className="w-full max-w-7xl mx-auto mt-20">
          <div className="flex  lg:flex-row flex-col w-full md:items-center items-start gap-10 justify-between">
            <div className="lg:w-1/2">
              <h2 className=" text-[14px] leading-[50px] font-bold">
                WORK WITH US
              </h2>
              <h1 className=" text-[50px] leading-[50px] ">
                Partner with Libero
              </h1>
            </div>
            <div className="lg:w-1/2 flex md:flex-row gap-5 flex-col">
              <div>
                <BarChart2 className="w-20 h-20 text-[#fa4729]" />
                <h1 className="text-[28px] mt-3 " style={{ color: "#0f0658" }}>
                  Analytics
                </h1>
                <p className="text-[17px] mt-3" style={{ color: "#0f0658" }}>
                  Libero's world class API enables your business to scale and
                  accept secure payments.
                </p>
              </div>
              <div>
                <Target className="w-20 h-20 text-[#fa4729]" />
                <h1 className="text-[28px] mt-3 " style={{ color: "#0f0658" }}>
                  Profits
                </h1>
                <p className="text-[17px] mt-3" style={{ color: "#0f0658" }}>
                  Increase sale completion by offering customers a safe and
                  reliable payment solution.
                </p>
              </div>
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
                enquiries@libero-corporate.com <br />
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

export default About
