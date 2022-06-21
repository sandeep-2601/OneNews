import React, { Component } from 'react';
import {countryMap,langMap} from '../utils/countryLangMapping';


export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            keywords: "",
            text: "Category",
            country: "Country",
            language: "Language"
        }
    }

    countries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"];
    languages = ["ar","de","en","es","fr","he","it","nl","no","pt","ru","sv","zh"];

    updateCategory = (category) => {
        this.props.handleCategory(category);
        this.setState({ text: category });
    }

    updateCountry = (country) => {
        this.props.handleCountry(country);
        this.setState({ country: country });
    }

    updateLanguage = (language) => {
        this.props.handleLanguage(language);
        this.setState({language:language})
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">One News</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {this.state.text.charAt(0).toUpperCase() + this.state.text.substring(1)}
                                </a>
                                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                    <li><button className="dropdown-item bg-dark text-light" onClick={() => { this.updateCategory("general") }}>General</button></li>
                                    <li><button className="dropdown-item bg-dark text-light" onClick={() => { this.updateCategory("entertainment") }}>Entertainment</button></li>
                                    <li><button className="dropdown-item bg-dark text-light" onClick={() => { this.updateCategory("business") }}>Business</button></li>
                                    <li><button className="dropdown-item bg-dark text-light" onClick={() => { this.updateCategory("health") }}>Health</button></li>
                                    <li><button className="dropdown-item bg-dark text-light" onClick={() => { this.updateCategory("science") }}>Science</button></li>
                                    <li><button className="dropdown-item bg-dark text-light" onClick={() => { this.updateCategory("sports") }}>Sports</button></li>
                                    <li><button className="dropdown-item bg-dark text-light" onClick={() => { this.updateCategory("technology") }}>Technology</button></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {this.state.country==="Country"?"Country":countryMap[this.state.country]}
                                </a>
                                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                    <li key={"All"}><button className="dropdown-item bg-dark text-light" onClick={() => { this.updateCountry("all") }}>All</button></li>
                                    {this.countries.map((country) => {
                                       return <li key={country}><button className="dropdown-item bg-dark text-light" onClick={() => { this.updateCountry(country) }}>{countryMap[country]}</button></li>
                                    })}
                                </ul>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {this.state.language==="Language"?"Language":langMap[this.state.language]}
                                </a>
                                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                    <li key="All"><button className="dropdown-item bg-dark text-light" onClick={() => { this.updateLanguage("all") }}>All</button></li>
                                    {this.languages.map((language) => {
                                       return <li key={language}><button className="dropdown-item bg-dark text-light" onClick={() => { this.updateLanguage(language) }}>{langMap[language]}</button></li>
                                    })}
                                </ul>
                            </li>

                        </ul>

                        <div className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Enter keywords" value={this.state.keywords} onChange={(e) => this.setState({ keywords: e.target.value })} aria-label="Search" />
                            <button className="btn btn-outline-success" onClick={() => { if (this.state.keywords.trim().length > 0) { this.props.onSearchClick(this.state.keywords.trim()); this.setState({ text: "Category",language:"Language",country:"Country"}) } }}>Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
