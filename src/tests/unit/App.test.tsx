import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";
import App from "../../App";

describe("App routing", () => {
  it("Render without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(/browser/i)).toBeInTheDocument();
  });
  it("Show HomePage /", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
  });

  it("Shows the WishlistPage in /wishlist", () => {
    render(
      <MemoryRouter initialEntries={["/wishlist/"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(/added/i)).toBeInTheDocument();
  });

  it("shows the FilmDetailPage in /film/:id", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/film/238"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Film/)).toBeInTheDocument();
  });
});
