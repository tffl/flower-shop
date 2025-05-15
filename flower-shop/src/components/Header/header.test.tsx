import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
  it("renders with default props", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByText("Blossom Bay")).toBeInTheDocument();
  });

  it("applies custom text color", () => {
    render(
      <BrowserRouter>
        <Header textColor="#ffffff" />
      </BrowserRouter>,
    );
    const logo = screen.getByText("Blossom Bay");
    expect(logo).toHaveStyle("color: #ffffff");
  });

  it('changes position to "static"', () => {
    render(
      <BrowserRouter>
        <Header position="static" />
      </BrowserRouter>,
    );
    const header = screen.getByRole("banner");
    expect(header).toHaveStyle("position: static");
  });
});
