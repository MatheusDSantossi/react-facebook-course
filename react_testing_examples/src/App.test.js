import { fireEvent, render, screen } from '@testing-library/react';
import FeedbackForm from './FeedbackForm';

// Example 1:
// test("renders a link that points to Litte Lemon webpage", () => {
//   render(<App />);
//   const linkElement = screen.getByText("Little Lemon Restaurant");
//   expect(linkElement).toBeInTheDocument();
// });

// Example 2
describe("Feedback Form", () => {
  test("Submission is disabled if score is lower than 5 and there is no feedback", () => {
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/i);
    fireEvent.change(rangeInput, { target: { value: "4" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toBeDisabled();
    // expect(submitButton).toHaveAtribute("disabled");
  });
});
