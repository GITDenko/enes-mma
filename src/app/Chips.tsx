const Chips = ({chips}: { chips: string[]}) => (
    <div
        style={{
            display: "flex",
            flexWrap: "wrap",
            marginBottom: "40px",
            gap: "20px",
            fontVariant: "small-caps",
            fontSize: "22px",
            color: "#e5e5e5",
        }}
    >
        {chips.map((chip) => (
            <span
                key={chip}
                style={{
                    color: "#e5e5e5",
                    fontFamily: "",
                    backgroundColor: "#363636",
                    padding: "5px 10px",
                }}
            >
            {chip}
        </span>
        ))}
    </div>
)

export default Chips;
