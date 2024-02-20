import classNames from "classnames";

const FormControl = ({
  value,
  type,
  onChange,
  placeholder,
  id,
  name,
  className,
}) => {
  return (
    <input
      type={type}
      id={id}
      data-testid={id}
      name={name}
      className={classNames("form-control", className)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormControl;
