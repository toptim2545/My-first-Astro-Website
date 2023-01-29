import { useState } from "react";

export const ReactExample = function ReactExample() {
  const [altColours, setAltColours] = useState(false);

  return (
    <section
      className={`react-container${altColours ? " react-container-alt" : ""}`}
    >
      <h2>Актуальные новости киноиндустрии</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/SN3zbBUgSw0"
          title="Актуальные новости киноиндустрии"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <button
        className={`react-button${altColours ? " react-button-alt" : ""}`}
        onClick={() => {
          setAltColours(!altColours);
        }}
      >
        <span className="screen-reader-text">Toggle colours</span>
      </button>
    </section>
  );
};

export default ReactExample;