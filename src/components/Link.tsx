import React from "react";

export type LinkProps = {
  displayText: string;
  url: string;
};

export const Link: React.FC<LinkProps> = ({ displayText, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="action-link">
      {displayText}
    </a>
  );
};
