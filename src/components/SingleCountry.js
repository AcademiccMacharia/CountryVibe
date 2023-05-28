import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import data from './data.json';

export default function SingleCountry() {
    const [country, setCountry] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const getSingleCountry = async () => {
            try {
                const countryData = data.find((country) => country.name === name);

                if (countryData) {
                    setCountry([countryData]);
                } else {
                    throw new Error('Country not found.');
                }
            } catch (error) {
                console.error(error);
            }
        };

        getSingleCountry();
    }, [name]);

    useEffect(() => {
        document.title = `Countries | ${name}`;
    }, [name]);

    return (
        <>
            <section className="single-country">
                <Link to="/" className="go-back"><p><FaArrowLeft className="left-arrow"/>Back</p></Link>
                {country.map((item) => (
                    <div key={item.id} className="single-container">
                        <img src={item.flags.svg} alt={item.name.common} />

                        <div className="country-info">
                            <h1>{item.name}</h1>
                            <div className="info-list">
                                <ul className="left-list">
                                    <li>Native Name: {item.nativeName}</li>
                                    <li>Population: {item.population.toLocaleString()}</li>
                                    <li>Region: {item.region}</li>
                                    <li>Subregion: {item.subregion}</li>
                                    <li>Capital: {item.capital}</li>
                                </ul>
                                <ul className="right-list">

                                    <li>Top Level Domain: {item.topLevelDomain}</li>
                                    <li>Currencies: {item.currencies.map(currency => currency.name).join(", ")}</li>
                                    <li>Languages: {item.languages.map(language => language.name).join(", ")}</li>
                                </ul>
                            </div>
                            <div className="border-countries">
                                <p>Border Countries:</p>
                                <ul className="borders">
                                    {country.map((item) => {
                                        if (Array.isArray(item.borders)) {
                                            return item.borders.map((border) => {
                                                const borderCountry = data.find(
                                                    (country) => country.alpha3Code === border
                                                );
                                                if (borderCountry) {
                                                    return (
                                                        <li key={border} className="border-item">
                                                            {borderCountry.name}
                                                        </li>
                                                    );
                                                }
                                                return null;
                                            });
                                        }
                                        return null;
                                    })}
                                </ul>
                            </div>


                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
