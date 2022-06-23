import { createContext, useState, useEffect } from "react";

export const Theme = createContext();

const Context = ({children}) => {
    
    const userTheme = localStorage.getItem('userTheme');
    const [ theme , setTheme ] = useState(userTheme?userTheme:"dark");
    const [currentCat, setCurrentCat ] = useState("general");
    const [currentIndex, setCurrentIndex ] = useState(0);
    const [ articles , setArticles ] = useState("");
    const lastCard = articles ? articles.length : 0;
    const apiKey = "3b8cc2ec31ed4f4c8adb3155639eb972";
    const country = "in";
    const [ bgColor , setBgColor] = useState("rgb(84,84,84)");


  useEffect(()=> {
    setCurrentIndex(0);

    const getNews = async () => {
      if(currentCat === "All"){
        const url = `https://newsapi.org/v2/everything?q=india&apiKey=${apiKey}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
      }
      else if(currentCat === "Trending"){
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
      }else{
        let txt = currentCat;
        let newCat = txt.toLowerCase();
        // let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${newCat}&apiKey=${apiKey}`;
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${newCat}/${country}.json`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
      }
        
    }

    getNews();


  },[currentCat])

    return (
        <Theme.Provider value={{theme, setTheme,currentCat, setCurrentCat,currentIndex, setCurrentIndex,articles , setArticles,lastCard, bgColor, setBgColor }}>{children}</Theme.Provider>
    )
}

export default Context;
