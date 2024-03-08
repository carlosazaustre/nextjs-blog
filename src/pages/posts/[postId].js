import Comments from "@/components/Comments";

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await postResponse.json();
  const authorResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  );
  const author = await authorResponse.json();

  return {
    props: {
      post,
      author,
    },
  };
}

export default function Post({ post, author }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>
        <small>
          Written by <b>{author.name}</b> ({author.email})
        </small>
      </p>
      <Comments postId={post.id} />
    </article>
  );
}
