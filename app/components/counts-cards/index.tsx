"use client"
import apiHandler from "@/app/utils/api-handler"
import { useEffect, useState } from "react"

export default function CountsCards() {
        const [counts , setCounts] = useState({})
        const getData = async () => {
            const data = await apiHandler.getCardsCounts()
            setCounts(data)
            console.log(data);
            
        }

        useEffect(()=>{
            getData()
        }, [])

        const cardStyle = "rounded-2xl p-2 sm:p-6 h-full w-[30%] sm:w-[28%] bg-white border border-gray-100 mr-0"
        const titleStyle = "text-gray-500 font-medium text-center sm:text-left"
        const countStyle = "font-semibold text-xl sm:text-3xl pt-1 text-center sm:text-left"

        return (
            <div className="flex justify-between mt-6 h-[7.5rem] mx-6 sm:mx-0">
                <div className={cardStyle}>
                    <div className={titleStyle}>All Events</div>
                    <div className={countStyle}>{counts?.total}</div>
                </div>
                <div className={cardStyle}>
                    <div className={titleStyle}>This Month Events</div>
                    <div className={countStyle}>{counts?.thisMonth}</div>
                </div>
                <div className={cardStyle}>
                    <div className={titleStyle}>Liked Events</div>
                    <div className={countStyle}>{counts?.liked ? counts?.liked : 0 }</div>
                </div>
            </div>
        )
}