"use client"

export default function CountsCards() {
        const cardStyle = "rounded-2xl p-2 sm:p-6 h-full w-[30%] sm:w-[28%] bg-white border border-gray-100 mr-0"
        const titleStyle = "text-gray-500 font-medium text-center sm:text-left"
        const countStyle = "font-semibold text-xl sm:text-3xl pt-1 text-center sm:text-left"

        return (
            <div className="flex justify-between mt-6 h-[7.5rem] mx-6 sm:mx-0">
                <div className={cardStyle}>
                    <div className={titleStyle}>All Events</div>
                    <div className={countStyle}>124.5k</div>
                </div>
                <div className={cardStyle}>
                    <div className={titleStyle}>This Month Events</div>
                    <div className={countStyle}>30</div>
                </div>
                <div className={cardStyle}>
                    <div className={titleStyle}>Liked Events</div>
                    <div className={countStyle}>24</div>
                </div>
            </div>
        )
}