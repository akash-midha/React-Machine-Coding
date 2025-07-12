import { useState } from "react"

const Calculator = () => {
    const buttons = [
        "AC",
        "C",
        "=",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "0",
        "-",
        "*",
        ".",
        "/",
    ]

    const [inputData, setInputData] = useState("");

    const handleChange = (item) => {
        if (item == "AC") {
            setInputData("");
        }
        else if (item == "C") {
            setInputData((prev) => prev.slice(0, -1));
        }
        else if (item == "=") {
            try {
                const evalData = eval(inputData);
                setInputData(evalData.toString());
            }
            catch (err) {
                setInputData("ERROR");
            }
        }
        else {
            setInputData((prev) => prev += item);
        }

    }
    return <div className="calculator">
        <input className="calculator_input" type="text" value={inputData} readOnly />
        <div className="calculator_buttons">
            {buttons.map((item, idx) => {
                return <button className="calculator_key" key={idx} onClick={() => handleChange(item)}>
                    {item}
                </button>
            })}
        </div>

    </div>
}

export default Calculator