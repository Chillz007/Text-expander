import React, { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor = "#1f09cd",
  expanded,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split("").slice(0, collapsedNumWords).join("") + `${"..."}`;

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <div
      className={className}
      collapsedNumWords={collapsedNumWords}
      expandButtonText={expandButtonText}
      expanded={expanded}
    >
      <span>{displayText} </span>
      <button
        style={buttonStyle}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
