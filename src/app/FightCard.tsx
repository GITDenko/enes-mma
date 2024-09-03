import style from "./PreviousFights.module.scss";
import { Dispatch, SetStateAction } from "react";
import { PreviousFight } from "@/app/PreviousFights";

export const FightCard = ({ fight, onMouseLeave }: { fight: PreviousFight, onMouseLeave: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div onMouseLeave={() => onMouseLeave(false)} className={style["fight-card-hover"]}>
            <div className={style.enes}>
                <h3>{fight.enes.name}</h3>
                <p>{fight.enes.country}</p>
                <p>{fight.enes.score}</p>
                <p>{fight.enes.weight}</p>
            </div>
            <div className={style.opponent}>
                <h3>{fight.opponent.name}</h3>
                <p>{fight.opponent.country}</p>
                <p>{fight.opponent.score}</p>
                <p>{fight.opponent.weight}</p>
            </div>
        </div>);
}