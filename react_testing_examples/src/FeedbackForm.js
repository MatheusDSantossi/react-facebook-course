import "./App.css"
import { useState } from "react";

function FeedbackForm({onSubmit}) {
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const isDisabled = Number(score) < 5 && comment.length <= 10;

    const textAreaPlaceholder = isDisabled 
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters."
    : "Optional feedback";

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({score, comment});
    };

    // This is the final version of the Feedback form.
    // If the score is less than or euqal to 5, the comment is mandatory. We check it as part of the validation
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedbacck form</h2>
                    <div className="Field">
                        <label htmlFor="scoreInput">Score: {score} ⭐</label>
                        <input
                            id="scoreInput"
                            value={score}
                            onChange={(e) => {
                                setScore(e.target.value);
                            }}
                            type="range"
                            min="0"
                            max="10"
                        />
                    </div>
                    <div className="Field">
                        <label>Comments:</label>
                        <textarea
                            value={comment}
                            name="comment"
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                            placeholder={textAreaPlaceholder}
                        />
                    </div>
                    <button type="submit" disabled={isDisabled}>Submit</button>
                </fieldset>
            </form>
        </div>
    );
};  

export default FeedbackForm;
