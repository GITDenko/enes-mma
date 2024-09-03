import Image from "next/image";
import Link from "next/link";

import style from "./Sponsor.module.scss";

const Sponsors = ({ sponsors }: { sponsors: { name: string, url: string, description?: string, image: { logo: string, height: number, width: number }}[] }) => (
    <div className={style.wrapper}>
        <div
            className={style.sponsors}
            style={{

            }}
        >
            {sponsors.map((sponsor) => (
                <a
                    href={sponsor.url}
                    title={sponsor.name}
                    key={sponsor.name}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        height={sponsor.image.height}
                        width={sponsor.image.width}
                        src={sponsor.image.logo}
                        alt={sponsor.name}
                        style={{
                            minHeight: "160px",
                            objectFit: "contain",
                        }}
                    />
                    <p>{sponsor.description}</p>
                </a>
            ))}
       </div>
    </div>
)

export default Sponsors;
