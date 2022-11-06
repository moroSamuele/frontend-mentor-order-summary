import Head from 'next/head'
import Image from 'next/image';


const Home = () => {
    return (
        <>
            <Head>
                <title>Frontend Mentor - Order Summary</title>

                <meta charSet="UTF-8" />
                <meta name="description" content="Build out this order summary card component and get it looking as close to the design as possible." />
                <meta name="keywords" content="Frontend Mentor, Moro Samuele, NextJs, React, Order Summary" />
                <meta name="author" content="Moro Samuele" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="w-full flex justify-center items-center p-[20px]">
                <div className="flex justify-center items-center">
                    <div className="shadow-4xl w-full md:w-[450px] bg-white rounded-[16px] flex flex-col">
                        <div className="relative h-[160px] md:h-[220px]">
                            <Image
                                src="/images/illustration-hero.svg"
                                layout="fill"
                                className="rounded-t-[15px]"
                            />
                        </div>
                        <div className="px-[25px] pt-[40px] pb-[20px] md:px-[50px] md:py-[48px] flex flex-col items-center">
                            <h1 className="text-[1.7rem] text-darkBlue">Order Summary</h1>
                            <p className="text-desaturatedBlue text-center my-[25px]">
                                You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
                            </p>
                            <div className="rounded-[10px] bg-veryPaleBlue py-[26px] px-[20px] w-full flex justify-between">
                                <div className="flex space-x-[20px]">
                                    <div className="rounded-full relative w-[45px] h-[45px]">
                                        <Image
                                            src="/images/icon-music.svg"
                                            layout="fill"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="font-bold text-darkBlue leading-none pb-[6px]">Annual Plan</p>
                                        <p className="text-desaturatedBlue leading-none">$59.99/year</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <a href="#" className="underline text-brightBlue transition-all hover:no-underline hover:text-hoverBrigthBlue text-[0.875rem]">Change</a>
                                </div>
                            </div>
                            <div className="w-full shadow-3xl mt-[30px]">
                                <button className="w-full rounded-[10px] py-[12px] bg-brightBlue font-bold transition-all tracking-[0.6px] text-white hover:bg-hoverBrigthBlue">
                                    Proceed to Payment
                                </button>
                            </div>
                            <button className="mt-[14px] w-full rounded-[10px] py-[12px] font-bold tracking-[0.6px] transition-all text-desaturatedBlue hover:text-darkBlue">
                                Cancel Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;