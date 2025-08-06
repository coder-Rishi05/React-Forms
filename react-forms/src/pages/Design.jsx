import { useState } from "react";

const Design = ()=>{

   const [data,setData] = useState();

    return (
        <div className="w-60 rounded-md bg-zinc-100 p-4 mt-10 relative pb-10">
            <div className="w-20 h-20 bg-orange-400 flex rounded-md  "></div>
            <div className="">
                <h2 className="text-xl font-semibold text-black  " >Song Name</h2>
                <h2 className="text-sm text-black " >Artist Name</h2>
            </div>
            <button className="px-4 py-3 text-sm cursor-pointer btn-primary text-white -translate-y-1/2 -translate-x-1/2 whitespace-nowrap -bottom-1/4 left-1/2 bg-orange-600 absolute rounded-2xl " >Add to favourates </button>
        </div>
    )
}


export default Design;