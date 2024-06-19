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

  const listCategories = [
    'Tecnologia',
    'Sport',
    'Salute',
    'Cucina ',
    'Finanza ',
  ];

  const [articles, setArticles] = useState([]);

  const initialData = {
    title: '',
    content: '',
    image: '',
    category: '',
    tags: [],
    status: true,
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
          <h2>Form</h2>
          {Object.keys(initialData).map((title, index) => {
            const value = initialData[title];
            switch (typeof value) {
              case 'boolean':
                return (
                  <label key={`formElement${index}`}>
                    Visibile
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
                    <strong>Tags:</strong>
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
                if (title === 'category') {
                  return (
                    <select
                      key={`formElement${index}`}
                      name={title}
                      value={formData[title]}
                      onChange={(e) => handleField(title, e.target.value)}
                    >
                      <option value="">Seleziona categoria</option>
                      {listCategories.map((c, index) => (
                        <option key={index} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  );
                }

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

          <button>invia</button>
        </form>

        <div className="articles">
          <h2 className="articlesTitle">Articoli</h2>
          {articles.length > 0 || (
            <h3 className="subtitle">Al momento non ci sono articoli</h3>
          )}

          {articles.map((a, index) => (
            <Article
              key={`article${index}`}
              title={a.title}
              content={a.content}
              imageUrl={a.image}
              category={a.category}
              tags={a.tags}
              status={a.status}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Form;
