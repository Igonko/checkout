import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Logo from "../components/Logo/Logo";
import { Discount, InitialView, PaymentView } from "../containers";
import { BaseLayout, LeftSlide, RightSlide } from "../layouts";
import { checkoutPageView } from "../constants/checkout";
import { countries } from "../constants/countries";

export const Checkout = () => {
  const [view, setView] = useState(checkoutPageView.INITIAL);
  const [formData, setFormData] = useState({
    email: "",
    country: countries[0].value,
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });
  };

  const toggleView = (view) => {
    setView(view);
  };

  const breadcumbItems = [
    {
      id: 1,
      title: "Shipping",
      active: false,
      onClick: () => toggleView(checkoutPageView.INITIAL),
    },
    { id: 2, title: "Payment", active: view === checkoutPageView.PAYMENT },
  ];

  return (
    <BaseLayout>
      <div className="mobile-data w-100 d-block d-lg-none">
        <Logo className="m-auto d-block" />
        <Breadcrumb items={breadcumbItems} />
      </div>
      <div className="d-flex flex-wrap w-100">
        <RightSlide>
          <Discount />
        </RightSlide>
        <LeftSlide>
          <Logo />
          <Breadcrumb items={breadcumbItems} />
          {view === checkoutPageView.INITIAL && (
            <InitialView
              toggleView={toggleView}
              formData={formData}
              handleChange={handleChange}
            />
          )}
          {view === checkoutPageView.PAYMENT && (
            <PaymentView
              toggleView={toggleView}
              formData={formData}
              handleChange={handleChange}
            />
          )}
          <div className="checkout-footer-link w-100 d-block">
            <a href="#">Refund policy</a>
            <a href="#">Shipping policy</a>
            <a href="#">Privacy policy </a>
            <a href="#">Terms of service</a>
          </div>
        </LeftSlide>
      </div>
    </BaseLayout>
  );
};
