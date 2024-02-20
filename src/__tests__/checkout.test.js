import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Checkout } from "../pages/Checkout";

describe("Checkout", () => {
  test("submits the form with all fields filled in and valid email", async () => {
    render(<Checkout />);

    // Fill in form fields
    fireEvent.change(screen.getByTestId("email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByTestId("country"), {
      target: { value: "United States" },
    });
    fireEvent.change(screen.getByTestId("lastName"), {
      target: { value: "lastname" },
    });
    fireEvent.change(screen.getByTestId("address"), {
      target: { value: "address" },
    });
    fireEvent.change(screen.getByTestId("city"), {
      target: { value: "city" },
    });
    fireEvent.change(screen.getByTestId("state"), {
      target: { value: "CA" },
    });
    fireEvent.change(screen.getByTestId("zipCode"), {
      target: { value: "342352" },
    });
    fireEvent.change(screen.getByTestId("phone"), {
      target: { value: "837493034820" },
    });
    fireEvent.click(screen.getByTestId("checkout-btn"));

    await waitFor(() => {
      expect(screen.getByTestId("payment")).toBeInTheDocument();
    });
  });
});
