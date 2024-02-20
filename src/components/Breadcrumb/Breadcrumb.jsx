import classNames from "classnames";

const Breadcrumb = ({ items }) => {
  return (
    <div className="cus-breadcrumb w-100 d-block">
      <ul>
        {items.map((item) => {
          return (
            <li
              key={item.id}
              className={classNames({ active: item.active })}
              onClick={item?.onClick}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
