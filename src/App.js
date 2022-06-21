import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const pageSize = 12;
  const [language, setLanguage] = useState("all");
  const [country, setCountry] = useState("all");
  const [category, setCategory] = useState("general");
  const [sourceUrl, setSourceUrl] = useState(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=`);

  const getUrl = (category,country,language) => {
   const url = `https://newsapi.org/v2/top-headlines?category=${category}&`+ ((country !== 'all')?`country=${country}&`:``) +((language !== 'all')?`language=${language}&`:``) +`apiKey=${apiKey}&pageSize=${pageSize}&page=`;
   return url;
  }

  const onHandleSearch = (keywords) => {
    const searchUrl = `https://newsapi.org/v2/everything?q=${keywords}&searchIn=title,description&sortBy=popularity&apiKey=${apiKey}&pageSize=${pageSize}&page=`;
    setSourceUrl(searchUrl);
    setLanguage("all");
    setCategory("general");
    setCountry("all");
  }

  const changeCategory = (sourceCategory) => {
    setCategory(sourceCategory);
    const updatedUrl = getUrl(sourceCategory,country,language)
    setSourceUrl(updatedUrl);
  
  }

  const changeCountry = (sourceCountry) => {
    setCountry(sourceCountry);
    const updatedUrl = getUrl(category,sourceCountry,language)
    setSourceUrl(updatedUrl);
  }

  const changeLanguage = (sourceLanguage) => {
    setLanguage(sourceLanguage);
    const updatedUrl = getUrl(category,country,sourceLanguage);
    setSourceUrl(updatedUrl);
    }

  return (
    <>
      <Navbar onSearchClick={(keywords) => { onHandleSearch(keywords) }} handleCategory={(category) => changeCategory(category)} handleCountry={(country) => changeCountry(country)} handleLanguage={(language) => changeLanguage(language)} />
      <div className="news-component my-3">
        <News sourceUrl={sourceUrl} key={sourceUrl} />
      </div>
      <Footer />
    </>
  );
}

export default App;
