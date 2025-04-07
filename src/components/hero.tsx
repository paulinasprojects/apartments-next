import Image from "next/image"

export const Hero = () => {
  return (
    <div className="hero-section relative w-full h-[500px]">
    <img
      src="/hero-image.jpg"
      alt="hero"
      className="object-cover w-full h-full"
    />
    <div className="hero-overlay" />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-white lg:text-[3.125rem] md:text-[2rem] max-sm:text-[1.5rem] leading-[3.125rem] font-bold">
        Discover Your New Home
      </h1>
      <p className="text-white md:text-[1.375rem] max-sm:text-[1rem] leading-[1.75rem] font-bold">
        Helping 100 million renters find their perfect fit.
      </p>
    </div>
  </div>
  
  )
}
