import { useEffect, useState } from "react";

const Router = ({ path, children }) => {
  const [location, setLocation] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChage = (e) => {
      setLocation(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChage);
    return () => window.removeEventListener("popstate", onLocationChage);
  }, [location]);

  return location === path ? children : null;
};
export default Router;
