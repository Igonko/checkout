import { Link } from "react-router-dom";
import { checkoutPageView } from "../../../constants/checkout";

const PaymentView = ({ toggleView }) => {
  const handleToggleView = () => {
    toggleView(checkoutPageView.INITIAL);
  };
  return (
    <>
      <div className="payment-top w-100 d-block" data-testid="payment">
        <ul>
          <li className="d-flex w-100 flex-wrap justify-content-between">
            <span className="left-text">Contact</span>
            <span>
              <a href="#">Change</a>
            </span>
          </li>
          <li className="d-flex w-100 flex-wrap justify-content-between">
            <span className="left-text">Ship to</span>
            <span>
              <a href="#">Change</a>
            </span>
          </li>
          <li className="d-flex w-100 flex-wrap justify-content-between">
            <span className="left-text">Shipping method</span>
            <span>Standard</span>
            <span>
              <a href="#">Change</a>
            </span>
          </li>
        </ul>
      </div>
      <div className="payment-card-section w-100 d-block">
        <div className="checkout-title flex-auto">Payment</div>
        <p> All transactions are secure and encrypted. </p>
        <div className="payment-card-box w-100 d-block">
          <div className="payment-card-box-top w-100 d-flex flex-wrap justify-content-between">
            <span>Credit card </span>
            <span>
              <img src="images/card-logo.jpg" alt="" className="img-fluid" />
            </span>
          </div>
          <div className="payment-card-box-data w-100 d-block">
            <div className="row gx-3">
              <div className="col-12">
                <div className="form-group w-100 d-block">
                  <input
                    type="text"
                    id="card-number"
                    placeholder="Card Number"
                    className="form-control checkout"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group w-100 d-block">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name on card"
                    className="form-control checkout"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group w-100 d-block">
                  <input
                    type="text"
                    id="expiration"
                    placeholder="Expiration date (MM / YY)"
                    className="form-control checkout"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group w-100 d-block">
                  <input
                    type="text"
                    id="Security-code"
                    placeholder="Security code"
                    className="form-control checkout"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="billing-address-section w-100 d-block">
        <div className="checkout-title flex-auto">Billing address</div>
        <p> Select the address that matches your card or payment method. </p>
        <div className="radio-button-row w-100 d-block">
          <label className="control control-radio">
            Same as shipping address
            <input
              type="radio"
              name="billing-address"
              checked="checked"
              onChange={() => {}}
            />
            <div className="control-indicator"></div>
          </label>
          <label className="control control-radio">
            Use a different billing address
            <input type="radio" name="billing-address" id="address-change" />
            <div className="control-indicator"></div>
          </label>
        </div>
        <div className="billing-address-form w-100 d-none">
          <div className="checkout-form w-100 d-block">
            <div className="row gx-3">
              <div className="col-12">
                <div className="form-group">
                  <select id="country" className="form-select checkout">
                    <option
                      data-code="US"
                      data-pure-numeric-postal-code="false"
                      value="United States"
                    >
                      United States
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="first-name"
                    className="form-control checkout"
                    placeholder="First name (optional)"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="last-name"
                    className="form-control checkout"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    id="address"
                    className="form-control checkout"
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    id="apartment"
                    className="form-control checkout"
                    placeholder="Apartment, suite, etc. (optional)"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="city"
                    className="form-control checkout"
                    placeholder="City"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <select id="state" className="form-select checkout">
                    <option>State</option>
                    <option data-alternate-values='["Alabama"]' value="AL">
                      Alabama
                    </option>
                    <option data-alternate-values='["Alaska"]' value="AK">
                      Alaska
                    </option>
                    <option data-alternate-values='["Arizona"]' value="AZ">
                      Arizona
                    </option>
                    <option data-alternate-values='["Arkansas"]' value="AR">
                      Arkansas
                    </option>
                    <option data-alternate-values='["California"]' value="CA">
                      California
                    </option>
                    <option data-alternate-values='["Colorado"]' value="CO">
                      Colorado
                    </option>
                    <option data-alternate-values='["Connecticut"]' value="CT">
                      Connecticut
                    </option>
                    <option data-alternate-values='["Delaware"]' value="DE">
                      Delaware
                    </option>
                    <option data-alternate-values='["Florida"]' value="FL">
                      Florida
                    </option>
                    <option data-alternate-values='["Georgia"]' value="GA">
                      Georgia
                    </option>
                    <option data-alternate-values='["Hawaii"]' value="HI">
                      Hawaii
                    </option>
                    <option data-alternate-values='["Idaho"]' value="ID">
                      Idaho
                    </option>
                    <option data-alternate-values='["Illinois"]' value="IL">
                      Illinois
                    </option>
                    <option data-alternate-values='["Indiana"]' value="IN">
                      Indiana
                    </option>
                    <option data-alternate-values='["Iowa"]' value="IA">
                      Iowa
                    </option>
                    <option data-alternate-values='["Kansas"]' value="KS">
                      Kansas
                    </option>
                    <option data-alternate-values='["Kentucky"]' value="KY">
                      Kentucky
                    </option>
                    <option data-alternate-values='["Louisiana"]' value="LA">
                      Louisiana
                    </option>
                    <option data-alternate-values='["Maine"]' value="ME">
                      Maine
                    </option>
                    <option data-alternate-values='["Maryland"]' value="MD">
                      Maryland
                    </option>
                    <option
                      data-alternate-values='["Massachusetts"]'
                      value="MA"
                    >
                      Massachusetts
                    </option>
                    <option data-alternate-values='["Michigan"]' value="MI">
                      Michigan
                    </option>
                    <option data-alternate-values='["Minnesota"]' value="MN">
                      Minnesota
                    </option>
                    <option data-alternate-values='["Mississippi"]' value="MS">
                      Mississippi
                    </option>
                    <option data-alternate-values='["Missouri"]' value="MO">
                      Missouri
                    </option>
                    <option data-alternate-values='["Montana"]' value="MT">
                      Montana
                    </option>
                    <option data-alternate-values='["Nebraska"]' value="NE">
                      Nebraska
                    </option>
                    <option data-alternate-values='["Nevada"]' value="NV">
                      Nevada
                    </option>
                    <option
                      data-alternate-values='["New Hampshire"]'
                      value="NH"
                    >
                      New Hampshire
                    </option>
                    <option data-alternate-values='["New Jersey"]' value="NJ">
                      New Jersey
                    </option>
                    <option data-alternate-values='["New Mexico"]' value="NM">
                      New Mexico
                    </option>
                    <option data-alternate-values='["New York"]' value="NY">
                      New York
                    </option>
                    <option
                      data-alternate-values='["North Carolina"]'
                      value="NC"
                    >
                      North Carolina
                    </option>
                    <option data-alternate-values='["North Dakota"]' value="ND">
                      North Dakota
                    </option>
                    <option data-alternate-values='["Ohio"]' value="OH">
                      Ohio
                    </option>
                    <option data-alternate-values='["Oklahoma"]' value="OK">
                      Oklahoma
                    </option>
                    <option data-alternate-values='["Oregon"]' value="OR">
                      Oregon
                    </option>
                    <option data-alternate-values='["Pennsylvania"]' value="PA">
                      Pennsylvania
                    </option>
                    <option data-alternate-values='["Puerto Rico"]' value="PR">
                      Puerto Rico
                    </option>
                    <option data-alternate-values='["Rhode Island"]' value="RI">
                      Rhode Island
                    </option>
                    <option
                      data-alternate-values='["South Carolina"]'
                      value="SC"
                    >
                      South Carolina
                    </option>
                    <option data-alternate-values='["South Dakota"]' value="SD">
                      South Dakota
                    </option>
                    <option data-alternate-values='["Tennessee"]' value="TN">
                      Tennessee
                    </option>
                    <option data-alternate-values='["Texas"]' value="TX">
                      Texas
                    </option>
                    <option data-alternate-values='["Utah"]' value="UT">
                      Utah
                    </option>
                    <option data-alternate-values='["Vermont"]' value="VT">
                      Vermont
                    </option>
                    <option data-alternate-values='["Virginia"]' value="VA">
                      Virginia
                    </option>
                    <option data-alternate-values='["Washington"]' value="WA">
                      Washington
                    </option>
                    <option
                      data-alternate-values='["District of Columbia"]'
                      value="DC"
                    >
                      Washington DC
                    </option>
                    <option
                      data-alternate-values='["West Virginia"]'
                      value="WV"
                    >
                      West Virginia
                    </option>
                    <option data-alternate-values='["Wisconsin"]' value="WI">
                      Wisconsin
                    </option>
                    <option data-alternate-values='["Wyoming"]' value="WY">
                      Wyoming
                    </option>
                    <option
                      data-alternate-values='["Armed Forces Pacific"]'
                      value="AP"
                    >
                      Armed Forces Pacific
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="zipCode	"
                    className="form-control checkout"
                    placeholder="Zip code"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    className="form-control checkout"
                    placeholder="Phone"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-row w-100 d-flex justify-content-between">
        <div className="back-link">
          <a href="#" onClick={handleToggleView}>
            <svg
              focusable="false"
              aria-hidden="true"
              className="icon-svg icon-svg--color-accent icon-svg--size-10 previous-link__icon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 10"
            >
              <path d="M8 1L7 0 3 4 2 5l1 1 4 4 1-1-4-4"></path>
            </svg>
            Return to shipping
          </a>
        </div>
        <button className="checkout-btn">Checkout now</button>
      </div>
    </>
  );
};

export default PaymentView;
