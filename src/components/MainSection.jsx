import Card from "../assets/images/card.png";
import NairaIcon from "../assets/icons/dashboardIIcons/nairaIcon.jsx";
import NairaIcon2 from "../assets/icons/dashboardIIcons/nairaIcon2.jsx";
import React from "react";
import MainSectionCard from "./MainSectionCard.jsx";

export default function MainSection({
                                        action1,
                                        action2,
                                        action3,
                                        action4,
                                        actionTitle1,
                                        actionTitle2,
                                        actionTitle3,
                                        actionTitle4
                                    }) {
    return (
        <div className="p-[1.4vw] bg-white grid grid-cols-10 rounded-lg w-full my-4">
            <div className="col-span-4 pr-[1.2vw] border-r border-[#E8E8E8]">
                <img src={Card} alt=""/>
            </div>
            <div className="col-span-2 grid place-items-center mr-[1.2vw] border-r border-[#E8E8E8]">
                <div className="">
                    <div className="font-bold">₦2,850.75</div>
                    <div className="text-sm">Wallet balance</div>
                </div>
            </div>
            <MainSectionCard actionTitle1={actionTitle1} action1={action1} actionTitle2={actionTitle2}
                             action2={action2}/>
            <MainSectionCard actionTitle1={actionTitle3} actionTitle2={actionTitle4} action1={action3}
                             action2={action4}/>

        </div>
    )
}