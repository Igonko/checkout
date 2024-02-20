import React from "react";
import { render, screen } from "@testing-library/react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

describe("Breadcrumb", () => {
  const breadcrumbItems = [
    {
      id: 1,
      title: "Shipping",
      active: false,
      onClick: jest.fn(),
    },
    {
      id: 2,
      title: "Payment",
      active: true,
    },
  ];

  test("Successful rendering of Breadcrumbs", () => {
    render(<Breadcrumb items={breadcrumbItems} />);

    const shippingItem = screen.getByText("Shipping");
    const paymentItem = screen.getByText("Payment");

    expect(shippingItem).toBeInTheDocument();
    expect(paymentItem).toBeInTheDocument();
  });

  test("The onClick event is triggered when item is clicked", () => {

    render(<Breadcrumb items={breadcrumbItems} />);

    const shippingElement = screen.getByText("Shipping");

    shippingElement.click();
    expect(breadcrumbItems[0].onClick).toHaveBeenCalled();
  });
});
