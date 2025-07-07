import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails(show) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return <p>Please select a show.</p>;
  }
  return (
    <div className="show-details">
      <h1>{show.name}</h1>
      <EpisodeList />
      <EpisodeDetails />
    </div>
  );
}
