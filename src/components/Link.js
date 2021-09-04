import React from "react";

const Link = ({ href, children, className }) => {
  const onLinkClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, "", href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a href={href} onClick={onLinkClick} className={className}>
      {children}
    </a>
  );
};

export default Link;
