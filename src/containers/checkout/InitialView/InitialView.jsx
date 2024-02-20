import { FormControl, FormSelect } from "../../../components";
import { checkoutPageView } from "../../../constants/checkout";
import { countries } from "../../../constants/countries";
import { states } from "../../../constants/state";

const validateEmailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const InitialView = ({ toggleView, formData, handleChange }) => {
  const handleToggleView = () => {
    toggleView(checkoutPageView.PAYMENT);
  };

  const validateForm = () => {
    if (!validateEmailRegex.test(formData.email)) {
      return false;
    }

    if (!formData.lastName) {
      return false;
    }

    if (!formData.address) {
      return false;
    }

    if (!formData.city) {
      return false;
    }

    if (!formData.state) {
      return false;
    }

    if (!formData.zipCode) {
      return false;
    }

    if (!formData.phone) {
      return false;
    }

    return true;
  };

  const isValid = validateForm();

  return (
    <>
      <div className="left-top-row w-100 d-flex flex-wrap justify-content-between">
        <div className="checkout-title flex-auto">Contact</div>
        <div className="email-box w-100 d-block">
          <FormControl
            type="email"
            id="email"
            placeholder="Email"
            className="checkout"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="checkbox-row w-100 d-block">
            <label className="control control-checkbox">
              Email me with news and offers
              <input type="checkbox" />
              <div className="control-indicator"></div>
            </label>
          </div>
        </div>
      </div>
      <div className="checkout-form-section w-100 d-block">
        <div className="checkout-title flex-auto">Shipping address</div>
        <div className="checkout-form w-100 d-block">
          <div className="row gx-3">
            <div className="col-12">
              <div className="form-group">
                <FormSelect
                  options={countries}
                  id="country"
                  className="checkout"
                  onChange={handleChange}
                  value={formData.country}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <FormControl
                  type="text"
                  id="firstName"
                  placeholder="First name (optional)"
                  className="checkout"
                  onChange={handleChange}
                  value={formData.firstName}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <FormControl
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  className="checkout"
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <FormControl
                  type="text"
                  id="address"
                  placeholder="Address"
                  className="checkout"
                  onChange={handleChange}
                  value={formData.address}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <FormControl
                  type="text"
                  id="apartment"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="checkout"
                  onChange={handleChange}
                  value={formData.apartment}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <FormControl
                  type="text"
                  id="city"
                  placeholder="City"
                  className="checkout"
                  onChange={handleChange}
                  value={formData.city}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <FormSelect
                  id="state"
                  className="checkout"
                  onChange={handleChange}
                  options={[
                    {
                      id: 0,
                      title: "State",
                      value: "",
                    },
                    ...states,
                  ]}
                  value={formData.state}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <FormControl
                  type="text"
                  id="zipCode"
                  placeholder="Zip code"
                  className="checkout"
                  onChange={handleChange}
                  value={formData.zipCode}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <FormControl
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  className="checkout"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
            </div>
          </div>
          <div className="btn-row w-100 d-flex justify-content-end">
            <button
              data-testid="checkout-btn"
              className="checkout-btn"
              onClick={handleToggleView}
              disabled={!isValid}
            >
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitialView;
