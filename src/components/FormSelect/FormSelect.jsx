import classNames from "classnames";

const FormSelect = ({ options, onChange, value, id, className }) => {
  return (
    <select
      id={id}
      data-testid={id}
      className={classNames("form-select", className)}
      onChange={onChange}
      value={value}
    >
      {options.map((option) => {
        return (
          <option
            key={option.id}
            value={option.value}
            dataalternatevalues={
              option?.AlternateValues && `["${option?.title}"]`
            }
          >
            {option.title}
          </option>
        );
      })}
    </select>
  );
};

export default FormSelect;
