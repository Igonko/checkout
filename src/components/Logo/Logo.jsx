import classNames from "classnames";

const Logo = ({ className }) => {
  return (
    <div className="checkout-logo w-100 d-block">
      <img
        src="images/logo-blue.png"
        alt=""
        className={classNames(className)}
      />
    </div>
  );
};

export default Logo;
