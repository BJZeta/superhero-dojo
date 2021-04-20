import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const Results = ({ winner, loser }) => {
  const [overallStats, setOverallStats] = useState({
    strength: {},
    intelligence: {},
    speed: {},
    durability: {},
    power: {},
    combat: {},
  });
  
  // const [loading, setLoading] = useState(null)

  

  useEffect(() => {

    const checkLeadStat = (winnerStat, loserStat) => {
      let leadStat = { lead: "Tie", stat: winnerStat };
  
      if (winnerStat > loserStat) {
        leadStat.lead = winner.name;
        return leadStat;
      }
      if (winnerStat < loserStat) {
        leadStat.lead = loser.name;
        leadStat.stat = loserStat;
        return leadStat;
      }
    };

    setOverallStats({
      strength: checkLeadStat(
        winner.powerstats.strength,
        loser.powerstats.strength
      ),
      intelligence: checkLeadStat(
        winner.powerstats.intelligence,
        loser.powerstats.intelligence
      ),
      speed: checkLeadStat(winner.powerstats.speed, loser.powerstats.speed),
      durability: checkLeadStat(
        winner.powerstats.durability,
        loser.powerstats.durability
      ),
      power: checkLeadStat(winner.powerstats.power, loser.powerstats.power),
      combat: checkLeadStat(winner.powerstats.combat, loser.powerstats.combat),
    });
  }, [winner, loser,]);

  return (
    <>
      <Col md="6">
        <img src={winner.image.url} width="65%" alt={winner.name} />
      </Col>
      <Col md="6">        
        <h2>Winner: {winner.name}</h2>
        <h4>Stat Comparison</h4>
        {overallStats.strength.lead}
        {overallStats.strength.stat}
        {overallStats.intelligence.lead}
        {overallStats.intelligence.stat}
        {overallStats.speed.lead}
        {overallStats.speed.stat}
        {overallStats.durability.lead}
        {overallStats.durability.stat}
        {overallStats.power.lead}
        {overallStats.power.stat}
        {overallStats.combat.lead}
        {overallStats.combat.stat}
      </Col>
    </>
  );
};

export default Results;
