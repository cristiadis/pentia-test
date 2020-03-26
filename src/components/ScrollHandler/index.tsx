import { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

const ScrollHandler = ({ location }: RouteComponentProps) => {
  useEffect(() => {
    const element = document.getElementById(location.hash);

    console.log(element ? element.offsetTop - 73 : 0);

    setTimeout(() => {
      window.scroll({
        top: element ? element.offsetTop - 73 : 0,
        behavior: element ? "smooth" : "auto"
      });
    }, 100);
  }, [location]);

  return null;
};

export default withRouter(ScrollHandler);