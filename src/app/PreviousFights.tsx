'use client';

import style from "./PreviousFights.module.scss";
import Image from "next/image";
import { useState } from "react";
import { FightCard } from "@/app/FightCard";

export type PreviousFight = {
    image: {
        src: string;
        alt: string;
        width: string;
        height: string;
    };
    result: {
        win: boolean;
        method: string;
        round: number;
        score: string;
        time: string;
    };
    enes: {
        name: string;
        country: string;
        score: string;
        weight: string;
    };
    opponent: {
        name: string;
        country: string;
        score: string;
        weight: string;
    };
};

export const PreviousFights = ({ previousFights }: { previousFights: PreviousFight[] }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <>
            <h2 className={style.title}>
                Previous fights
            </h2>
            <div className={style.wrapper}>
                {previousFights.map((fight, i) => (
                    <>
                        <div
                            className={style['fight-card']}
                            key={i}
                            onClick={() => setIsHovering(true)}
                        >
                            <Image src={fight.image.src} alt={fight.image.alt} width={Number(fight.image.width)}
                                   height={Number(fight.image.height)}/>
                        </div>
                        {isHovering && <FightCard fight={fight} onMouseLeave={setIsHovering} />}
                    </>
                ))}
            </div>
        </>
    );
}

