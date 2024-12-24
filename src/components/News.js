// import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalResults, settotalResults] = useState(0);
//   // document.title = `${capitalizeFirstLetter(
//   //   props.category
//   // )} - NewsMonkey`;

//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   const updateNews = async () => {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

//     setLoading(true);
//     try {
//       let data = await fetch(url);
//       props.setProgress(30);
//       let parsedData = await data.json();
//       props.setProgress(70);

//       // const uniqueArticles = parsedData.articles.filter(
//       //   (article, index, self) =>
//       //     index === self.findIndex((t) => t.url === article.url)
//       // );
//       setArticles(parsedData.articles);
//       settotalResults(parsedData.totalResults);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching news:", error);
//     }
//     props.setProgress(100);
//   };
//   useEffect(() => {
// document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
//     updateNews();
//     //eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // const handlePrevClick = async () => {
//   //   setPage(page - 1);
//   //   updateNews();
//   // };

//   // const handleNextClick = async () => {
//   //   setPage(page + 1);
//   //   updateNews();
//   // };
//   const fetchMoreData = async () => {
//     if (articles.length >= totalResults) {
//       return;
//     }

//     // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5d206deea64949f19300b16321d7b06d&page=${state.page}&pageSize=${props.pageSize}`;

//     // let data = await fetch(url);
//     // let parsedData = await data.json();

//     // setState({
//     //   articles: state.articles.concat(parsedData.articles),
//     //   totalResults: parsedData.totalResults,
//     // });
//     const url = `https://newsapi.org/v2/top-headlines?country=${
//       props.country
//     }&category=${props.category}&apiKey=${props.apiKey}&page=${
//       page + 1
//     }&pageSize=${props.pageSize}`;
//     // setState({ loading: true });
//     const nextPage = page + 1;
//     setPage(nextPage);
//     try {
//       let data = await fetch(url);
//       let parsedData = await data.json();

//       const uniqueArticles = parsedData.articles.filter(
//         (article, index, self) =>
//           index === self.findIndex((t) => t.url === article.url)
//       );
//       setArticles(articles.concat(uniqueArticles));
//       settotalResults(parsedData.totalResults);
//     } catch (error) {
//       console.error("Error fetching news:", error);
//     }
//   };

//   return (
//     <>
//       <h1
//         className="text-center"
//         style={{ margin: "35px 0px", marginTop: "90px" }}
//       >
//         NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
//       </h1>
//       {loading && <Spinner />}
//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={articles.length < totalResults}
//         loader={<Spinner />}
//       >
//         <div className="container">
//           <div className="row">
//             {articles.map((element, index) => {
//               return (
//                 <div className="col-md-4" key={`${element.url} - ${index}`}>
//                   <NewsItem
//                     title={element.title ? element.title : ""}
//                     description={element.description ? element.description : ""}
//                     imageUrl={element.urlToImage}
//                     newsUrl={element.url}
//                     author={element.author}
//                     date={element.publishedAt}
//                     source={element.source.name}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </InfiniteScroll>
//       {/* <div className="container d-flex justify-content-between">
//           <button
//             disabled={state.page <= 1}
//             type="button"
//             className="btn btn-dark"
//             onClick={handlePrevClick}
//           >
//             &larr; Previous
//           </button>
//           <button
//             disabled={
//               state.page + 1 >
//               Math.ceil(state.totalResults / props.pageSize)
//             }
//             type="button"
//             className="btn btn-dark"
//             onClick={handleNextClick}
//           >
//             Next &rarr;
//           </button>
//         </div> */}
//     </>
//   );
// };

// News.defaultProps = {
//   country: "us",
//   pageSize: 8,
//   category: "general",
// };
// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };
// export default News;

// // New Code video no39

import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const updateNews = async () => {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

      setLoading(true);
      try {
        const data = await fetch(url);
        props.setProgress(30);
        const parsedData = await data.json();
        props.setProgress(70);

        setArticles(parsedData.articles || []);
        settotalResults(parsedData.totalResults || 0);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      props.setProgress(100);
    };

    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    if (articles.length >= totalResults) {
      return;
    }

    try {
      const nextPage = page + 1;
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;

      const data = await fetch(url);
      const parsedData = await data.json();

      setArticles((prevArticles) =>
        prevArticles.concat(parsedData.articles || [])
      );
      settotalResults(parsedData.totalResults || totalResults);
      setPage(nextPage);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px" }}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={`${element.url}-${index}`}>
                  <NewsItem
                    title={element.title || ""}
                    description={element.description || ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
