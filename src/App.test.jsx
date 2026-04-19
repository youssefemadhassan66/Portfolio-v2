import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./App";

function renderRoute(route) {
  return render(
    <MemoryRouter
      initialEntries={[route]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <AppRoutes />
    </MemoryRouter>,
  );
}

describe("portfolio routes", () => {
  test("renders the home hero content", () => {
    renderRoute("/");

    expect(
      screen.getByRole("heading", {
        name: /building bold web products that feel sharp, fast, and ready for real users/i,
      }),
    ).toBeInTheDocument();
  });

  test("renders a project detail page with github link", () => {
    renderRoute("/projects/chess-game");

    expect(screen.getByRole("heading", { name: /chess game/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view github repository/i }),
    ).toHaveAttribute("href", "https://github.com/youssefemadhassan66/Chess-Game");
  });

  test("renders the profile photo in the brand area", () => {
    renderRoute("/");

    expect(screen.getByRole("img", { name: /youssef emad portrait/i })).toBeInTheDocument();
  });

  test("renders a fallback message for an unknown project route", () => {
    renderRoute("/projects/not-a-real-project");

    expect(screen.getByText(/project not found/i)).toBeInTheDocument();
  });
});
