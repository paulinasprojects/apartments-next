import Image from "next/image"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Card, CardContent } from "./ui/card"

export const PropertiesCard = () => {
  return (
    <div>
    <div className="flex flex-col gap-6 items-center justify-center">
    <div className="grid lg:grid-cols-4 md:grid-cols-2  max-sm:grid-cols-1 gap-6 mt-4">
      <Card className="w-full xl:w-[259px] lg:w-[235px] md:w-[340px] max-sm:w-[340px] h-full shadow-none hover:shadow-lg cursor-pointer transition-shadow duration-150 rounded-lg">
        <CardContent className="!p-0">
          <Image width={257} height={240} className="rounded-tl-lg rounded-tr-lg md:w-[340px] max-sm:w-[340px]" src="/card-image.jpg" alt="" />
          <div className="mt-4">
            <p className="text-center">Presidential Towers</p>
          </div>
          <div className="text-center mt-8">
            <p className="text-[15px]">555 W Madison St,</p>
            <p className="text-[15px]">Chicago, IL 60661</p>
            <p className="my-4 mx-4 text-[14px]">Studio - 2 Beds | $1,605 - $9,400</p>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full  xl:w-[259px] lg:w-[235px] md:w-[340px] max-sm:w-[340px] h-full shadow-none hover:shadow-lg cursor-pointer transition-shadow duration-150 rounded-lg">
        <CardContent className="!p-0">
          <Image width={257} height={240} className="rounded-tl-lg rounded-tr-lg md:w-[340px] max-sm:w-[340px]" src="/card-image1.jpg" alt="" />
          <div className="mt-4">
            <p className="text-center">The 808 Cleveland</p>
          </div>
          <div className="text-center mt-8">
            <p className="text-[15px]">808 N Cleveland Ave,</p>
            <p className="text-[15px]">Chicago, IL 60610</p>
            <p className="my-4 mx-4 text-[14px]">Studio - 4 Beds | $1,185 - $5,068</p>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full  xl:w-[259px] lg:w-[235px] md:w-[340px] max-sm:w-[340px] h-full shadow-none hover:shadow-lg cursor-pointer transition-shadow duration-150 rounded-lg">
        <CardContent className="!p-0">
          <Image width={257} height={240} className="rounded-tl-lg rounded-tr-lg md:w-[340px] max-sm:w-[340px]" src="/card-image2.jpg" alt="" />
          <div className="mt-4">
            <p className="text-center">Post</p>
          </div>
          <div className="text-center mt-8">
            <p className="text-[15px]">853 W Blackhawk St,</p>
            <p className="text-[15px]">Chicago, IL 60642</p>
            <p className="my-4 mx-4 text-[14px]">Studio - 4 Beds | $1,200 - $6,965</p>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full  xl:w-[259px] lg:w-[235px] md:w-[340px] max-sm:w-[340px] h-full shadow-none hover:shadow-lg cursor-pointer transition-shadow duration-150 rounded-lg">
        <CardContent className="!p-0">
          <Image width={257} height={240} className="rounded-tl-lg rounded-tr-lg  md:w-[340px] max-sm:w-[340px]" src="/card-image3.jpg" alt="" />
          <div className="mt-4">
            <p className="text-center">Flora</p>
          </div>
          <div className="text-center mt-8">
            <p className="text-[15px]">1114 W Carroli Ave,</p>
            <p className="text-[15px]">Chicago, IL 60607</p>
            <p className="my-4 mx-4 text-[14px] xl:whitespace-nowrap">Studio - 3 Beds | $2,297 - $18,007</p>
          </div>
        </CardContent>
      </Card>
    </div>
      <Button
        size="lg" className="bg-[#427b02] text-lg font-bold">View More</Button>
    </div>
    <div className="px-7 my-7">
      <Separator/>
    </div>
    </div>
  )
}
