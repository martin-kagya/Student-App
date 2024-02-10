import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import factors from "../Factors.json"
function Conversion() {
    const [category, setCategory] = useState(null)
    const [unit, setunit] = useState(null)
    const [result, setResult] = useState(null)
    const [value, setValue] = useState(null)
    const cat = factors.category

    const handleChange = (e) => {
        const newVal = e.target.value
        setValue(newVal)
    }
    const handleCatChange = (e) => {
        const newCat = e.target.value
        setCategory(newCat);
    }
    const handleUnit = (e) => {
        const newUnit = e.target.value
        setunit(newUnit)
    }
    const handleConversion = () => {
        setResult(value * cat[category][unit])
    }
    return(
        <>
            <div className="container-convert">
                <h2>Unit Converter</h2>
                <i>All inputs must be in their SI units for now</i>
                <select onChange={handleCatChange}>
                    <option>Select metric</option>
                    {
                        Object.keys(cat).map((key, index) => (
                            <option key={index}>{key}</option>
                        ))
                    }
                </select>  
                <input type="text" id="input" required placeholder="Input value" onChange={handleChange}></input>
                {category && value && (
                    <>
                        <select onChange={handleUnit}>
                            <option>Select unit</option>
                            {
                                Object.keys(cat[category]).map((key, index) => (
                                    <option key={index}>{key}</option>
                                ))
                            }
                        </select>
                        <button onClick={handleConversion}>Convert</button>
                        <p>{result}</p>
                    </>
                )
                }
            </div>
        </>
    )
}
export default Conversion;