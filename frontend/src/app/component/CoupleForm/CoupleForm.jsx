"use client"
import React, { useState } from 'react'
import './couple-form.css'
import Image from 'next/image'
import countryData from "../../data/countrydata"
import coupleImage from "../../Images/couple.png"
const CoupleForm = () => {
    const [ageFrom, setAgeFrom] = useState(18);
    const [ageTo, setAgeTo] = useState(40);

    // Handle From input manually
    const handleFromChange = (e) => {
        const value = Number(e.target.value);
        setAgeFrom(value);
        if (value > ageTo) setAgeTo(value); // optional logic
    };

    // Handle To input manually
    const handleToChange = (e) => {
        const value = Number(e.target.value);
        setAgeTo(value);
    };

    // Only update TO when slider moves
    const handleSliderChange = (e) => {
        const value = Number(e.target.value);
        setAgeTo(value);
    };
    return (
        <>
            <section className='couple-form'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="couple-form-left">
                                <h1>Your true love starts here.</h1>
                                <p>Join the dating site where you could meet anyone, anywhere!</p>
                                <form>
                                    <div className="mb-3 FormSelectSection   ">
                                        <label className="form-label d-block fw-bold">I am:</label>
                                        <div className="btn-group" role="group">
                                            <input type="radio" className="btn-check" name="iam" id="iam-man" autoComplete="off" defaultChecked />
                                            <label className="btn custom-radio-btn" htmlFor="iam-man">Man</label>

                                            <input type="radio" className="btn-check" name="iam" id="iam-woman" autoComplete="off" />
                                            <label className="btn custom-radio-btn" htmlFor="iam-woman">Woman</label>

                                            <input type="radio" className="btn-check" name="iam" id="iam-nonbinary" autoComplete="off" />
                                            <label className="btn custom-radio-btn" htmlFor="iam-nonbinary">Nonbinary</label>
                                        </div>
                                    </div>

                                    <div className="mb-3 FormSelectSection   ">
                                        <label className="form-label d-block fw-bold">Interested In:</label>
                                        <div className="btn-group" role="group">
                                            <input type="radio" className="btn-check" name="interested" id="interested-man" autoComplete="off" />
                                            <label className="btn custom-radio-btn" htmlFor="interested-man">Man</label>

                                            <input type="radio" className="btn-check" name="interested" id="interested-woman" autoComplete="off" defaultChecked />
                                            <label className="btn custom-radio-btn" htmlFor="interested-woman">Woman</label>

                                            <input type="radio" className="btn-check" name="interested" id="interested-nonbinary" autoComplete="off" />
                                            <label className="btn custom-radio-btn" htmlFor="interested-nonbinary">Nonbinary</label>
                                        </div>
                                    </div>

                                    <div className="mb-3 FormSelectSection   ">
                                        <label className="form-label fw-bold">Age</label>
                                        <div className="d-flex ageRange gap-2 mb-2">
                                            <div className="d-grid">
                                                <label htmlFor="ageFrom">From</label>
                                                <input
                                                    id="ageFrom"
                                                    type="number"
                                                    className="couple-form-input"
                                                    min="18"
                                                    max="100"
                                                    value={ageFrom}
                                                    onChange={handleFromChange}
                                                />
                                            </div>
                                            <div className="d-grid">
                                                <label htmlFor="ageTo">To</label>
                                                <input
                                                    id="ageTo"
                                                    type="number"
                                                    className="couple-form-input"
                                                    min="18"
                                                    max="100"
                                                    value={ageTo}
                                                    onChange={handleToChange}
                                                />
                                            </div>
                                        </div>
                                        <input
                                            type="range"
                                            className="form-range"
                                            min="18"
                                            max="100"
                                            value={ageTo}
                                            onChange={handleSliderChange}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label fw-bold">Country</label>
                                        <select className="form-select">
                                            <option value="">Select Country</option>
                                            {countryData.map((item, index) => (
                                                <option key={index} value={typeof item === 'string' ? item : item.name || item.code || index}>
                                                    {typeof item === 'string' ? item : item.name || item.code || item.toString()}
                                                </option>
                                            ))}
                                        </select>

                                    </div>

                                    <div className='FindPartnerbtnSec'>
                                        <button type="submit" className="btn FindPartnerbtn " style={{ backgroundColor: "#A16EFF", color: "white" }}>
                                            Find your partner
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6 text-end">
                            <div className="couple-form-right">
                                <Image src={coupleImage} alt="Couple Form" className="couple-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoupleForm