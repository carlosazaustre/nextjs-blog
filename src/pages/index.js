import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - MyNextBlog</title>
        <meta
          name="description"
          content="Welcome to my blog build with Next.js"
        />
      </Head>
      <main>
        <h1>Welcome to MyNextBlog</h1>
        <p>
          This is a simple blog build with Next.js. You can read more about it
          in the <Link href="/about">about page</Link>.
        </p>
      </main>
    </>
  );
}
