
import { render } from '@testing-library/react';
import App from './App';



describe("Test to render up component", () => {
  it("renders the App component", () => {
    render(<App />);
  })
});