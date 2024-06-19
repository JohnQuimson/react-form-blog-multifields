import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit, FaSave } from 'react-icons/fa';
import Article from './Article';

const Form = () => {
  const listTags = [
    'Notizie',
    'Attualità',
    'Tecnologia',
    'Economia',
    'Politica',
    'Ambiente',
    'Cultura',
    'Salute',
  ];

  const [articles, setArticles] = useState([]);

  const initialData = {
    title: '',
    content: '',
    image: '',
    category: '',
    tags: [],
    status: false,
  };

  const [formData, setFormData] = useState(initialData);

  const [editIndex, setEditIndex] = useState(null);

  const handleField = (title, value) => {
    setFormData((curr) => ({
      ...curr,
      [title]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setArticles((curr) => [...curr, formData]);
    setFormData(initialData);
  };

  return (
    <>
      <section id="form-section">
        <form onSubmit={handleSubmit}>
          {Object.keys(initialData).map((title, index) => {
            const value = initialData[title];
            switch (typeof value) {
              case 'boolean':
                return (
                  <label key={`formElement${index}`}>
                    {title}
                    <input
                      name={title}
                      type="checkbox"
                      checked={formData[title]}
                      onChange={(e) => handleField(title, e.target.checked)}
                    />
                  </label>
                );

              case 'object':
                return (
                  <div key={`formElement${index}`}>
                    <p>tags:</p>
                    <ul>
                      {listTags.map((title, index) => (
                        <li key={`tags${index}`}>
                          <label>
                            <input
                              type="checkbox"
                              checked={formData.tags.includes(title)}
                              onChange={() => {
                                const curr = formData.tags;
                                const newTags = curr.includes(title)
                                  ? curr.filter((el) => el !== title)
                                  : [...curr, title];
                                handleField('tags', newTags);
                              }}
                            />
                            {title}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                );

              default:
                return (
                  <input
                    key={`formElement${index}`}
                    name={title}
                    type={typeof value === 'number' ? 'number' : 'text'}
                    placeholder={title}
                    value={formData[title]}
                    onChange={(e) =>
                      handleField(
                        title,
                        typeof value === 'number'
                          ? Number(e.target.value)
                          : e.target.value
                      )
                    }
                  />
                );
            }
          })}

          {/* <div className="input-container">
            <input
              type="text"
              placeholder="Inserisci un articolo"
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
            />
            {articleTitle && (
              <button
                type="button"
                onClick={handleDeleteInput}
                className="clear-button"
              >
                x
              </button>
            )}
          </div> */}
          <button>invia</button>
        </form>

        {articles.length > 0 && <h3 className="subtitle">Articoli:</h3>}

        <div className="articles">
          {articles.map((a, index) => (
            <Article
              key={`article${index}`}
              title={a.title}
              content={a.content}
              imageUrl={a.imageUrl}
              category={a.category}
              tags={a.tags}
              status={a.status}
            />
          ))}
        </div>

        {/* <ul>
          {articles.map((article, index) => (
            <li key={`article${index}`}>
              <span>{article}</span>
              <div className="cont-icons">
                <FaRegEdit
                  className="editIcon"
                  onClick={() => handleEdit(index)}
                />
                <MdDeleteForever
                  className="deleteIcon"
                  onClick={() => removeArticle(index)}
                />
              </div>
            </li>
          ))}
        </ul> */}
      </section>
    </>
  );
};

export default Form;
