import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './News.css';
import InfiniteScroll from 'react-infinite-scroll-component';


export default function NewsComponent({ category,setProgress }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading ,setLoading]=useState(0)


  useEffect(() => {
    function fetchArticles() {
      axios.get(`
      https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=112e80ea5ac543c895413774e38f3dad&pageSize=10`)
        .then((response) => {
          setArticles(response.data.articles);
         setLoading(response.data.totalResults)
        })
        .catch((error) => {
          console.error('Error fetching articles:', error);
        });
    }

    fetchArticles();
  }, [category]);

  function loadMoreArticles() {
   setTimeout(()=>{
    const nextPage = page + 1;
    axios.get(`
    https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=112e80ea5ac543c895413774e38f3dad&pageSize=10&page=${nextPage}`)
      .then((response) => {
        setArticles((prevArticles) => [...prevArticles, ...response.data.articles]);
        setPage(nextPage);
        
      })
      .catch((error) => {
        console.error('Error fetching more articles:', error);
      });
   },3000)
  }

  useEffect(()=>{
    setProgress(50)
    setTimeout(()=>{
      setProgress(100)
    },2000)
  },[setProgress])

  return (
    
    <div className='container'>
      <marquee behavior='scroll' scrollamount='20' id='mar' ><h1 id='mh'>{category} - HEADLINES</h1></marquee>
      
      <InfiniteScroll
        dataLength={articles.length}
        next={loadMoreArticles}
        hasMore={articles.length<loading} // Stop loading more if all articles are loaded
        loader={<center><img src='https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif' alt='' width={'50px'} /></center>}
      >
        <div className='row'>
          {articles.map((article, index) => (
            <div className='col-lg-4 col-md-6 p-5' key={index}>
              <Card style={{ width: '18rem' }} id='tc'>
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                  {article.source && <span className="badge bg-warning">{article.source.name}</span>}
                </div>
                <Card.Img variant="top" src={!article.urlToImage ? 'https://variety.com/wp-content/uploads/2024/01/The-Raja-Saab.jpg?w=1000' : article.urlToImage} height={'250px'} id='cm' />
                <Card.Body>
                  <Card.Title>{article.title.slice(0, 40)}...</Card.Title>
                  <Card.Text>{!article.description ? 'i am venkatesh nuthakki ,present i am working as webdeveloper in  techmatics.....' : article.description.slice(0, 80)}...</Card.Text>
                  <Card.Text>Author:{article.author} </Card.Text>
                  <Card.Text>publishedAt: {new Date(article.publishedAt).toGMTString()}</Card.Text>
                  <Button variant="primary" id='cbt' href={article.url} target='_blank'>Read More</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
