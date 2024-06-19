import React from 'react';

const Article = ({ title, content, imageUrl, category, tags, status }) => {
  return (
    <>
      {status ? (
        <>
          <div className="article">
            {/* <h3>{title}</h3>
            <div>
              <strong>Tags:</strong>
              <ul>
                {tags.map((tag, index) => (
                  <li key={`tag${index}`}>{tag}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Content:</strong> {content}
            </div>
            <div className="card-image">
              <img src={imageUrl} alt="img" />
            </div>
            <h3>Category: {category}</h3> */}
            <div class="card text-bg-dark">
              <img src={imageUrl} alt="img" />
              <div class="card-img-overlay">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{content}</p>
                <p class="card-text">Tags</p>
                <ul>
                  {tags.map((tag, index) => (
                    <li key={`tag${index}`}>{tag}</li>
                  ))}
                </ul>
                <p class="card-text">Category: {category}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="article">
          <h4>Articolo non visibile</h4>
        </div>
      )}
    </>
  );
};

export default Article;
