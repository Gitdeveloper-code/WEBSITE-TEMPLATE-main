import Image from "next/image"
import Button from "./Button"

const About1 = () => {
  return (
    <>
      <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                {/* Author's Picture */}
                <div className="relative lg:max-w-md">

                    <Image  src="/asset/img/fatma.png" alt="aboutimage" height={500} width={500} 
                        className="relative z-10 object-cover w-full rounded h-96 border-2 border-tertiary"/>
                    {/* <div
                        className="absolute mt-11 bottom-0 right-0 z-10 p-8 bg-white border-4 border-secondary rounded shadow dark:border-blue-400 lg:-mb-20 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                        <p className="text-lg font-semibold md:w-72 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className="absolute top-0 left-0 w-16 h-16 text-red-400 dark:text-gray-300 opacity-10"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                </path>
                            </svg> Successfully Providing business solutions from 25 years
                        </p>
                    </div> */}
                </div>
            </div>
    <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                {/* Author's Name */}
                <div className="pl-4 mb-6 border-l-4 border-tertiary ">
                    <span className="text-sm text-tertiary uppercase dark:text-gray-400">Who we are?</span>
                    <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                        Fatma Rahman
                    </h1>
                </div>
                <p className="mb-6 text-base leading-7 text-white dark:text-gray-400 text-justify">
                Fanash Beauty is the brainchild of the talented and dedicated owner, Fatma Rahman. Fatma is a certified beauty therapist with extensive experience and a deep passion for the beauty industry. Her qualifications include iTec and QQI certifications, along with specialization in Dermalogica skin care from Ireland. Fatma&apos;s vision and commitment to excellence drive the salon&apos;s success and innovation.

Fatma also holds a diploma in  fine arts. At Fanash Beauty, our mission is to elevate beauty therapy to an art form, creating exclusive looks inspired by our customers&apos; personal style, event needs, and individual taste. We blend the world of fine arts with beauty, turning every appointment into a canvas where we pay meticulous attention to detail.
                </p>
                <Button
                title='Learn More'
                />
               
            </div>
    </>
     )
}
export default About1
