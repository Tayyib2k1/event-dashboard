import Image from "next/image";
import { useState } from "react";

export default function Filter() {
    const [showFilters, setShowFilters] = useState(false)

    return (
        <span className="w-fit absolute right-4 sm:right-[-0.5rem] top-3 sm:top-0">
            <Image
                className="inline hover:scale-125"
                src='filter.svg'
                alt='filter'
                height={50}
                width={50}
                onClick={()=>setShowFilters(!showFilters)}
            />

            {showFilters &&
                (
                    <>
                        <div className="
                            after:absolute after:h-0 after:w-0 after:border-8 after:border-transparent after:border-b-white after:top-[-1rem] after:right-[0.75rem]
                            absolute right-1.5 h-fit sm:h-52 w-fit bg-white top-[2.5rem] rounded-lg drop-shadow-2xl z-10 p-4
                        ">
                            <div  className="text-gray-500 font-light">Category</div>
                            <select className="w-44 bg-gray-100 px-4 py-2 border-r-8 border-r-gray-100 rounded-md hover:bg-gray-200 hover:border-r-gray-200 text-gray-400">
                                <option value="a">a</option>
                                <option value="a">b</option>
                                <option value="a">c</option>
                            </select><br/>
                            <div  className="text-gray-500 font-light mt-4">Date & Time</div>
                            <div className="flex flex-col sm:flex-row">
                                <div className="flex flex-col flex-grow">
                                    <span className="w-1/2 text-gray-300">To:</span>
                                    <input className="inline w-10/12 bg-gray-100 p-2 rounded-md hover:bg-gray-200 text-gray-400" type="datetime-local" name="" id="" />
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <span className="w-1/2 text-gray-300">From:</span>
                                    <input className="inline w-10/12 bg-gray-100 p-2 rounded-md hover:bg-gray-200 text-gray-400" type="datetime-local" name="" id="" />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </span>
    )
}