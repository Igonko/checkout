const BaseLayout = ({ children }) => {
  return (
    <div id="wrapper w-100 d-block">
      <div className="container small-container">{children}</div>
    </div>
  );
};

export default BaseLayout;
