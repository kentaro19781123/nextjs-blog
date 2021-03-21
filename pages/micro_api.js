// import Link from 'next/link';

export default function micro({ news }) {
  return (
    <div>
      <ul>
        {news.map(news => (
          <li key={news.id}>
            {news.title}
          </li>
        ))}
      </ul>
    </div>
  );
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://kentaro.microcms.io/api/v1/news', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      news: data.contents,
    },
  };
};