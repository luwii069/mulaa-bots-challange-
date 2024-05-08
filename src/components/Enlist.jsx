import React from "react";
import BotSpecs from "./BotSpecs";

function EnlistSection(props) {
  const { clickedBot, setClickedBot, army, setArmy, bots, setBots } = props;

  //const showAllBots = () => {
  // Implement logic to show all bots
  // console.log("Showing all bots");
  //};

  const enlist = () => {
    for (let i = 0; i < army.length; i++) {
      let bot = army[i];
      if (bot.id === clickedBot.id) {
        return;
      }
    }
    let newArmy = army;
    newArmy.push(clickedBot);
    setArmy(newArmy);
    const newBots = bots.filter((bot) => {
      if (bot.id === clickedBot.id) {
        return false;
      }
      return true;
    });
    setBots(newBots);
    setClickedBot(null);
  };
  const goBack = () => {
    setClickedBot(null);
  };
  if (!clickedBot) {
    return null;
  }
  return <BotSpecs bot={clickedBot} enlist={enlist} goBack={goBack} />;
}

export default EnlistSection;
