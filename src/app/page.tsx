import Image from "next/image";
import Chips from "@/app/Chips";
import Wins from "@/app/Wins";
import Sponsors from "@/app/Sponsors";

import style from "./Page.module.scss";
import { PreviousFights } from "@/app/PreviousFights";

const data = {
    name: "Enes Ahmemulic",
    title: '"The Menace"',
    fighter: {
        title: "Fighter info",
        description: "Discover Enes Ahmemulic, Swedish MMA bantamweight champion known for his relentless work ethic and tactical prowess. Learn about his journey to European gold and his contributions to MMA.",
    },
    upcomingFight: {
        title: 'Upcoming fights'
    },
    previousFights: [{
        image: {
            src: '/fighter1.webp',
            alt: '',
            width: '304',
            height: '380',
        },
        result: {
            win: true,
            method: 'Submission',
            round: 2,
            score: '',
            time: '3:45',
        },
        enes: {
            name: 'Enes Ahmemulic',
            country: 'Sweden',
            score: '',
            weight: ''
        },
        opponent: {
            name: 'John Doe',
            country: 'USA',
            score: '',
            weight: '',
        },
    },
    {
        image: {
            src: '/fighter1.webp',
            alt: '',
            width: '304',
            height: '380',
        },
        result: {
            win: true,
            method: 'Submission',
            round: 2,
            score: '',
            time: '3:45',
        },
        enes: {
            name: 'Enes Ahmemulic',
            country: 'Sweden',
            score: '',
            weight: ''
        },
        opponent: {
            name: 'John Doe',
            country: 'USA',
            score: '',
            weight: '',
        },
    },
    {
        image: {
            src: '/fighter1.webp',
            alt: '',
            width: '304',
            height: '380',
        },
        result: {
            win: true,
            method: 'Submission',
            round: 2,
            score: '',
            time: '3:45',
        },
        enes: {
            name: 'Enes Ahmemulic',
            country: 'Sweden',
            score: '',
            weight: ''
        },
        opponent: {
            name: 'John Doe',
            country: 'USA',
            score: '',
            weight: '',
        },
    }],
    tags: ["mma", "immaf", "european champion", "sweden", "fight center"],
    titles: ["IMMAF European Champion - 2024", "SM Class A - 2024", "SM Class B - 2023"],
    wins: [{ type: "Submissions", count: 8 }, { type: "Decision", count: 6 }, { type: "Tko", count: 1 }],
    sponsors: [
        {
            name: "Askari Fighter",
            description: "Get 20% off at Askari Fighter with code: ENES20",
            image: {
                logo: "/askari_logo.webp",
                height: 29,
                width: 220,
            },
            url: "https://askarifighter.com/",
        },
        {
            name: "Next Level Gelato",
            description: "Get 10% off at NextLevel Gelato with code: ENES10",
            image : {
                logo: "/nextLevel_logo.webp",
                height: 100,
                width: 100,
            },
            url: "https://nextlevelgelato.se/",
        },
        {
            name: "Vasa Grillen",
            description: "Get 10% off at Vasagrillen with code: ENES10",
            image: {
                logo: "/vasa_grillen_logo.webp",
                height: 100,
                width: 100,
            },
            url: "https://vasagrillen.se",
        },
        {
            name: "Plant Factory",
            image: {
                logo: "/plantfactory_logo.webp",
                height: 35,
                width: 100,
            },
            url: "https://plantfactory.com/",
        },
    ],
}

const h2Style = {
    fontSize: "80px",
    color: "#ffffff",
    fontFamily: "",
    fontWeight: "400",
    textAlign: 'center',
}

const pStandard = {
    width: "800px",
    fontSize: "24px",
    fontWeight: "50",
    margin: '0 auto 50px',
}

const ScrollToNext = () => (
    <svg className={style.scroll} width="50px" height="50px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 15 H40 M10 20 H40 M10 25 H40 M10 30 H40 M10 35 H40 M15 35 V45 H35 V35 M20 40 H30" fill="#a72535" stroke="black" stroke-width="2"/>
    </svg>
)

const Page = () => {
    return (
        <div>
            <div className={style['image-wrapper']}>
                <Image
                    src="/Enes-Ahmemulic-AM.webp"
                    alt="Enes Ahmemulic"
                    width={1200}
                    height={630}
                    className={style.image}
                    draggable={false}
                    priority
                />
                <div className={style.overlay}>
                    <Chips chips={data.tags}/>
                    <h2 style={{color: "#a72535", fontSize: "42px", marginBottom: "0px", fontWeight: "400"}}>
                        {data.title}
                    </h2>
                    <h1 className={style.name}>{data.name}</h1>
                    <h3 className={style.titles}>
                        {data.titles.map((title) => (
                            <p key={title}>{title}</p>
                        ))}
                    </h3>
                    <Wins wins={data.wins}/>
                </div>
                <Sponsors sponsors={data.sponsors}/>
        <h2 style={h2Style}>
            {data.fighter.title}
        </h2>
        <p style={pStandard}>
            {data.fighter.description}
        </p>
        <h2 style={h2Style}>
            {data.upcomingFight.title}
        </h2>
        <p style={pStandard}>Tune in for the World cup here</p>
        <PreviousFights previousFights={data.previousFights} />
    </div>
</div>
)
}

export default Page;