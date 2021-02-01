function Header(props) {
  return (
    <div>
      <h1>{props.title || "Task Tracker"}</h1>
      <h2>Tasks:</h2>
      <ul>
        <li>Study</li>
        <li>Play</li>
        <li>Work</li>
      </ul>
      <h2>Done:</h2>
    </div>
  );
}

export default Header;
