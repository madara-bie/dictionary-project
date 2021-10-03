import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("word");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        //Documentation: https://dictionaryapi.dev/

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        const pexelsApiKey = "563492ad6f917000010000017c9316eb1db74deb88ca18236f671a05";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization : `Bearer ${pexelsApiKey}` }
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1 className="App-header-h1">DICTIONARY</h1>
                    <h4 className="App-header-h4">What word are you looking for?</h4>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} autoFocus={true} defaultValue="Word"/>
                    </form>
                    <div className="hint">
                        Example: Sun, Book, Wine ...
                    </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return("Loading");
    }
}