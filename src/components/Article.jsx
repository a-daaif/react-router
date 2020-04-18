import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../lib";
const Article = ({ match }) => {
  useEffect(() => {
    getArticle();
  }, []);
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const getArticle = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + match.params.id
    );
    const post = await response.json();
    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" +
        match.params.id +
        "/comments"
    );
    const allComments = await response2.json();
    console.log(post);
    setArticle(post);
    setComments(allComments);
  };
  return (
    <article>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <div className="comments">
        {comments.map((comment) => (
          <div className="comment">
            <h5>{comment.name}</h5>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
      <Link to="/blog">Retour</Link>
    </article>
  );
};

export default Article;
