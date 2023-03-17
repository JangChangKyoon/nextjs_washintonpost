import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  const [posts, setPosts] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://books-api.nomadcoders.workers.dev/list?name=${router.query.id}`
        )
      ).json();
      setPosts(results.books);
    })();
  }, []);
  // console.log(posts[1].)
  return (
    <div className="container">
      {!posts && <h4>Loading...</h4>}
      {posts?.map((post) => (
        <div className="post" key={post.rank}>
          <Link href={`${post.amazon_product_url}`} legacyBehavior>
            <img src={`${post.book_image}`} />
          </Link>
          <a>{post.title}</a>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .post {
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .post img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .post:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .post a {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
