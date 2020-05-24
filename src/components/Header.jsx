import React from "react";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

function Header() {
  return (
    <header>
      <h1>
        <AssignmentTurnedInIcon className="keeper-icon" />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
