import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  shows,
  setSelectedShow,
  setSelectedShow,
}) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a class="show" key={show.name}>
          {show.name}
        </a>
      ))}
    </nav>
  );
}
