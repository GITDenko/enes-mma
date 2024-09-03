const Wins = ({ wins }: { wins: { type: string, count: number }[] }) => (
    <div
        style={{
            position: "absolute",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "40px",
            textAlign: "center",
            fontSize: "58px",
            fontWeight: "400",
            fontVariant: "all-small-caps",
            top: "65vh",
        }}
    >
        {wins.map((win) => (
            <div
                key={win.type}
                style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    gap: "10px",
                }}
            >
                <h3
                    style={{
                        fontSize: "24px",
                        fontWeight: "600",
                    }}
                >{win.type}</h3>
                <hr style={{border: "1px solid #a72535"}}/>
                <p>{win.count}</p>
            </div>
        ))}
    </div>
)

export default Wins;
