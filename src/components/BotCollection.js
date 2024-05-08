import React, { useState } from "react";
import BotSpecs from "./BotSpecs";
function BotCollection(props) {
  // Your code here
  const { bots, setClickedBot } = props;

  const addToArmy = (bot) => {
    setClickedBot(bot);
  };

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {bots.map((bot) => {
          return (
            <div key={bot.id} onClick={() => addToArmy(bot)}>
              <BotSpecs bot={bot} />;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BotCollection;
