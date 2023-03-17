import Link from "next/link";
import { useEffect, useState } from "react";
import Seo from "./components/Seo";

export default function Home({ results }) {
  return (
    <div>
      <Seo title="Home" />
      {results?.map((post) => (
        <div key={post.list_name}>
          <h4>{post.display_name}</h4>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/posts`)).json();
  return {
    props: {
      results,
    },
  };
}
