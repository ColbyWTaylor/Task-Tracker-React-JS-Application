import Proptypes from "prop-types";

function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <button>Click</button>
    </div>
  );
}

Header.defaultProps = {
  title: "Task Trackerr",
};

Header.propTypes = {
  title: Proptypes.string.isRequired,
};

export default Header;
