import { useRouter } from "next/router";
import Seo from "./components/Seo";
import Link from "next/link";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (name) => {
    router.push(
      {
        pathname: `/posts/&{id}`,
        query: {
          name,
        },
      }`/posts/${id}`
    );
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((post) => (
        <div className="posts" key={post.list_name_encoded}>
          <h4>
            <Link
              href={{
                pathname: `/posts/${post.list_name_encoded + ""}`,
                query: {
                  name: post.list_name_encoded,
                },
              }}
              as={`/posts/${post.list_name_encoded + ""}`}
              legacyBehavior
            >
              <a>{post.list_name_encoded}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 10px;
        }
        .posts {
          cursor: pointer;
        }
        .posts h4 {
          font-size: 18px;
          text-align: center;
          border: solid black;
          padding: 20px;
          border-radius: 10pc;
        }
      `}</style>
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
