// import Link from 'next/link';

export default function micro({ news }) {
  return (
    <div>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': 'fddd9db3-2020-431a-98d8-ef85285b45c3'},
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