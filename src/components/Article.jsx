import React from 'react';

const Article = ({ title, content, imageUrl, category, tags, status }) => {
  return (
    <>
      <h3>{title}</h3>
      <strong>tags:</strong>
      <ul>
        {tags.map((tag, index) => (
          <li key={`ingr${index}`}>{tag}</li>
        ))}
      </ul>
    </>
  );
};

export default Article;
