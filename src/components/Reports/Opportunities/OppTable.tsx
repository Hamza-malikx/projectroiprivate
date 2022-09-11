import React from "react";

interface OppTableProps {
  events: string[];
  timeframes: string[];
  sources: { name: string; icon: string }[];
}

export const OppTable: React.FC<OppTableProps> = ({
  events,
  timeframes,
  sources,
}) => {
  return (
    <div className="table-container">
      <div className="table-column">
        <div className="table-column-heading">Event</div>
        {events.map((e, idx) => (
          <div className="table-element" key={idx}>
            {e}
          </div>
        ))}
      </div>
      <div className="table-column divider" />
      <div className="table-column">
        <div className="table-column-heading">Timeframe</div>
        {timeframes.map((t, idx) => (
          <div className="table-element" key={idx}>
            {t}
          </div>
        ))}
      </div>
      <div className="table-column divider" />
      <div className="table-column">
        <div className="table-column-heading">Source</div>
        {sources.map(({ name, icon }, idx) => (
          <div className="table-element source" key={idx}>
            <img
              src={`./${icon}`}
              className="source-icon"
              alt={`${name} logo`}
            />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};
