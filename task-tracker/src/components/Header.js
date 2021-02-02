import Proptypes from "prop-types";
import Button from "./Button";

function Header({ title }) {
  const onClick = () => {
    console.log("click");
  };

  return (
    <div>
      <h1>{title}</h1>
      <Button color="green" text="Press" onClick={onClick} />
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: Proptypes.string.isRequired,
};

export default Header;
