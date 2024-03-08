import Head from "next/head";
import Link from "next/link";
import styles from "./Posts.module.css";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Posts - MyNextBlog</title>
        <meta
          name="description"
          content="Welcome to the posts section of my blog"
        />
      </Head>
      <main>
        <h1>Posts</h1>
        <p>
          This is the posts section of my blog. You can read more about it in
          the <Link href="/about">about page</Link>.
        </p>
        <ul className={styles.list}>
          {posts.map((post) => (
            <li className={styles.item} key={post.id}>
              <Link className={styles.link} href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
