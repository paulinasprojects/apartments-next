import { HouseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram,FaLinkedinIn, FaTiktok, FaYoutube  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";


export const Footer = () => {
  return (
    <footer className="flex gap-6 items-center bg-neutral-100 w-full lg:px-7 py-4 max-sm:flex-col max-sm:gap-4 md:flex-col lg:flex-row">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={225}
          height={39}
        />
      </Link>
      <div className="flex items-center gap-6 mt-4">
        <p className="text-[.875rem]">© 2025 CoStar Group Inc</p>
        <p className="flex items-center gap-2 text-[.875rem]">
          <HouseIcon className="size-4"/>
          Equal Housing Opportunity
        </p>
      </div>
      <div className="flex items-center lg:ml-auto gap-4 mt-2 max-sm:ml-0 md:ml-0">
        <Link href="/" className="flex items-center bg-[#4c4c4c] hover:bg-black transition-colors duration-500 text-white rounded-full p-1.5">
          <FaFacebookF className="size-5"/>
        </Link>
        <Link href="/" className="flex items-center bg-[#4c4c4c] hover:bg-black transition-colors duration-500 text-white rounded-full p-1.5">
          <FaXTwitter className="size-5"/>
        </Link>
        <Link href="/" className="flex items-center bg-[#4c4c4c] hover:bg-black transition-colors duration-500 text-white rounded-full p-1.5">
          <FaInstagram className="size-5"/>
        </Link>
        <Link href="/" className="flex items-center bg-[#4c4c4c] hover:bg-black transition-colors duration-500 text-white rounded-full p-1.5">
          <FaLinkedinIn className="size-5"/>
        </Link>
        <Link href="/" className="flex items-center bg-[#4c4c4c] hover:bg-black transition-colors duration-500 text-white rounded-full p-1.5">
          <FaTiktok  className="size-5"/>
        </Link>
        <Link href="/" className="flex items-center bg-[#4c4c4c] hover:bg-black transition-colors duration-500 text-white rounded-full p-1.5">
          <FaYoutube  className="size-5"/>
        </Link>
        <Link href="/" className="flex items-center bg-[#4c4c4c] hover:bg-black transition-colors duration-500 text-white rounded-full p-1.5">
          <MdAlternateEmail  className="size-5"/>
        </Link>
      </div>
    </footer>
  )
}
