import { PropertiesCard } from "./properties-card"

export const Explore = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center mt-5">
        <p className="text-[1.625rem]">Explore Rentals in Chicago, IL</p>
      </div>
      <div>
        <PropertiesCard/>
      </div>
    </div>
  )
}
