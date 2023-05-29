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
                                    <li><span>Native Name: </span>{item.nativeName}</li>
                                    <li><span>Population: </span> {item.population.toLocaleString()}</li>
                                    <li><span>Region: </span>{item.region}</li>
                                    <li><span>Subregion: </span>{item.subregion}</li>
                                    <li><span>Capital: </span>{item.capital}</li>
                                </ul>
                                <ul className="right-list">

                                    <li><span>Top Level Domain: </span>{item.topLevelDomain}</li>
                                    {item.currencies && ( 
                                    <li><span>Currencies: </span>{item.currencies.map(currency => currency.name).join(", ")}</li>
                                    )}
                                    {item.languages && (
                                    <li><span>Languages: </span>{item.languages.map(language => language.name).join(", ")}</li>
                                    )}
                                </ul>
                            </div>
                            <div className="border-countries">
                                <p><span>Border Countries: </span></p>
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
                                                return null
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
