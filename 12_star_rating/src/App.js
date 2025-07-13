import './App.css';
import { useState } from "react";


function StarRatingWidget({ maxStars = 5, filledStars = 0 }) {
  const [filled, setFilled] = useState(filledStars);
  const [filledHover, setFilledHover] = useState(0);

  const starChangeHandler = (num) => {
    setFilled(num + 1);
  };
  return (
    <div className="">
      <div className="StarRating">
        {[...Array(maxStars)].map((_, i) => {
          return (
            <span
              key={i}
              className={`star ${i + 1 <= filled ? "filledStar" : ""} ${i + 1 <= filledHover ? "filledStar" : ""} `}
              onClick={() => setFilled(i + 1)}
              onMouseOver={() => setFilledHover(i + 1)}
              onMouseOut={() => setFilledHover(0)}
            >
              &#9733;
            </span>
          );
        })}
      </div>

      <div>
        <p>RatingStars : {filled} / {maxStars}</p>
        HoverStars : {filledHover} / {maxStars}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <StarRatingWidget maxStars = {7} filledStars = {1}/>
    </div>
  );
}

