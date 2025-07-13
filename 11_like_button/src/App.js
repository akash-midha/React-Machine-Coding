import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";
import './App.css';

export default function App() {
  const [liked, setLiked] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      setFetching(true);
      setError(null);
      const response = await fetch(
        "https://questions.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        },
      );
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setLiked((prev) => !prev);
      } else {
        setError(json.message);
      }
    } finally {
      setFetching(false);
    }
  }
  return (
    <div>
      <button
        className={`likeBtn ${liked ? "liked" : ""}`}
        onClick={handleClick}
        disabled={fetching}
      >
        {fetching ? <SpinnerIcon /> : <HeartIcon />}
        {liked ? "Liked" : "Like"}
      </button>
      {error && <span>{error}</span>}
    </div>
  );
}

