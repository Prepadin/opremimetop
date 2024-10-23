import Image from 'next/image'
import { Button } from "@/components/ui/button"

export const LandingAfter = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          {/* <div className="bg-gray-100 text-gray-600 text-sm py-2 px-4 rounded-full inline-block mb-4">
            Used by over <span className="text-blue-500 font-semibold">2 million people</span> to redesign homes
          </div> */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Vaš osebni <span className="text-blue-500">AI</span><br />
          notranji oblikovalec
          </h1>
          {/* <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full">
            Redesign your room
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </Button> */}
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-white rounded-lg shadow-lg p-4">
            {/* <div className="absolute top-4 right-8 bg-white text-blue-500 font-semibold py-1 px-3 rounded-full shadow z-10">
              Instantly Redesign
            </div> */}
            <div className="flex">
              <div className="w-1/2 pr-2">
                <Image
                  src="/bed.jpg?height=300&width=200"
                  alt="Before room design"
                  width={300}
                  height={400}
                  className="rounded-lg"
                />
                <div className="mt-2 text-center text-gray-600 font-semibold">Prej</div>
              </div>
              <div className="w-1/2 pl-2">
                <Image
                  src="/lux1.png?height=300&width=200"
                  alt="After room design"
                  width={300}
                  height={400}
                  className="rounded-lg"
                />
                <div className="mt-2 text-center text-gray-600 font-semibold">Potem</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}