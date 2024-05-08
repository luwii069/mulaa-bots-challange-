import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import EnlistSection from "./Enlist";

function BotsPage() {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState([]);
  const [clickedBot, setClickedBot] = useState(null);

  useEffect(() => {
    getBots();
  }, []);

  const getBots = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBots(result);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <YourBotArmy army={army} setArmy={setArmy} />
      <EnlistSection
        army={army}
        setArmy={setArmy}
        bots={bots}
        setBots={setBots}
        clickedBot={clickedBot}
        setClickedBot={setClickedBot}
        // enlistBot={enlistBot}
      />
      <BotCollection bots={bots} setClickedBot={setClickedBot} />
    </div>
  );
}

export default BotsPage;
