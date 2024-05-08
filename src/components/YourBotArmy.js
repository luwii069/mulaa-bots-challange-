import React from "react";
import BotSpecs from "./BotSpecs";

function YourBotArmy({ army }) {
  // Provide a default value of an empty array
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <h2>Your Bot Army</h2>
          {army.map((bot) => {
            return <BotSpecs key={bot.id} bot={bot} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
