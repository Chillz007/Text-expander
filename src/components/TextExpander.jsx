import React, { useState } from "react";

export default function TextExpander({
  collapsedNumWords,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor,
  expanded,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded ? children : "test";

  return (
    <div
      className={className}
      collapsedNumWords={collapsedNumWords}
      expandButtonText={expandButtonText}
      expanded={expanded}
    >
      <span>{displayText} </span>
      <button
        style={{ buttonColor }}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
