function Header(props) {
  return (
    <div>
      <h1>{props.title || "Task Tracker"}</h1>
    </div>
  );
}

export default Header;
