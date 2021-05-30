import React from "react";

function HintsLinks(props) {
  const Hint = () => {
    if (props.Active === "Characters") {
      return (
        <div className="hints_and_links">
          <p style={{ marginTop: 20 }} className="hint">
            How To Use ? Try
            <span
              style={{ marginRight: 6 }}
              onClick={() => props.Get_Hint("characters")}
            >
              characters
            </span>
            OR
            <span onClick={() => props.Get_Hint("characters/harry potter")}>
              characters/harry potter
            </span>
          </p>
        </div>
      );
    } else if (props.Active === "Houses") {
      return (
        <div className="hints_and_links">
          <p style={{ marginTop: 20 }} className="hint">
            How To Use ? Try
            <span
              style={{ marginRight: 6 }}
              onClick={() => props.Get_Hint("Houses")}
            >
              Houses
            </span>
            OR
            <span onClick={() => props.Get_Hint("Houses/Gryffindor")}>
              Houses/Gryffindor
            </span>
          </p>
        </div>
      );
    } else if (props.Active === "Spells") {
      return (
        <div className="hints_and_links">
          <p style={{ marginTop: 20 }} className="hint">
            How To Use ? Try
            <span
              style={{ marginRight: 6 }}
              onClick={() => props.Get_Hint("Spells")}
            >
              Spells
            </span>
            OR
            <span onClick={() => props.Get_Hint("Spells/Accio")}>
              Spells/Accio
            </span>
          </p>
        </div>
      );
    } else return null;
  };

  return (
    <>

      <Hint />
    </>
  );
}

export default HintsLinks;
