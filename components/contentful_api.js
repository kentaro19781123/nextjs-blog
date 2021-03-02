import { useState, useEffect } from "react";
const Contentful = require("contentful");
const client = Contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export default function contentfulApi() {
  const [items, setItems] = useState([]);
  async function fetchEntries() {
    const entries = await client.getEntries();
    console.log(entries);
    return entries.items;
  }
  const setFetchToState = (fetch) => {
    setItems(fetch);
  }
  useEffect(() => {
      (async() => {
        const items = await fetchEntries();
        setFetchToState(items);
      })();
  }, []);
  return (
    <>
      { items.map((item, id) => {
        return(
          <div key={ id }>
            { item.fields.textarea }
          </div>
        );
      })}
    </>
  )
}