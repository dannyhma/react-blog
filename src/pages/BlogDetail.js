import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './404Page';

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
        );

        if (!request.ok) {
          return setNotFound(true);
        }

        const response = await request.json();

        document.title = response.title;
        setArticle(response);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );

  if (notFound) {
    return <NotFound />;
  }

  return (
    <section>
      {loading ? (
        <i>loading article...</i>
      ) : (
        <article>
          <h1>{article.title}</h1>
          <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
          <img src={article.imageUrl} alt={article.title} />
          <p>{article.summary}</p>
          <p>
            Source:
            <a href='{article.url}' target='_blank' rel='noreferrer'>
              {article.newSite}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}
