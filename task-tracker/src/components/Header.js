import Proptypes from "prop-types";
import Button from "./Button";

function Header({ title, onAdd, showAdd }) {
  return (
    <div>
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add Task"}
        onClick={onAdd}
      />
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
