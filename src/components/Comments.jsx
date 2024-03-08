import { useState, useEffect } from "react";
import styles from "./Comments.module.css";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      const commentsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const comments = await commentsResponse.json();
      setComments(comments);
      setLoading(false);
    };

    fetchComments();
  }, [postId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const body = event.target.body.value;

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
      {
        method: "POST",
        body: JSON.stringify({
          postId,
          email,
          name,
          body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const comment = await response.json();
    setComments((comments) => [comment, ...comments]);
    event.target.reset();
  };

  return (
    <section className={styles.section}>
      <h2>Comments</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Add a comment</h3>
        <div className={styles.fieldset}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className={styles.fieldset}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div className={styles.fieldset}>
          <label htmlFor="body">Comment:</label>
          <textarea id="body" required />
        </div>
        <button className={styles.button} type="submit">
          Add comment
        </button>
      </form>
      {loading ? (
        <p>Loading comments...</p>
      ) : (
        <ul className={styles.list}>
          {comments.map((comment) => (
            <li key={comment.id}>
              <small>
                <b>{comment.email}</b> said:
              </small>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
