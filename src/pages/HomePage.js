import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: "Coś o świecie...",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, architecto enim. Quasi illum placeat reiciendis? Nisi cumque temporibus a. Esse dolor fugit recusandae nesciunt cumque fugiat libero quae laborum! Qui!",
  },
  {
    id: 2,
    title: "Wspomnienia życia",
    author: "Sebastian Bucior",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, architecto enim. Quasi illum placeat reiciendis? Nisi cumque temporibus a. Esse dolor fugit recusandae nesciunt cumque fugiat libero quae laborum! Qui!",
  },
  {
    id: 3,
    title: "Moje hobby",
    author: "Paweł Wojtasik",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, architecto enim. Quasi illum placeat reiciendis? Nisi cumque temporibus a. Esse dolor fugit recusandae nesciunt cumque fugiat libero quae laborum! Qui!",
  },

]

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ))
  return (
    <div className="home">
      {artList}
    </div>
  );
}
export default HomePage;