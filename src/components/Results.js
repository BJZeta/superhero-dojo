import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const Results = ({ winner, loser, clearButton }) => {
  const [overallStats, setOverallStats] = useState({
    strength: {},
    intelligence: {},
    speed: {},
    durability: {},
    power: {},
    combat: {},
  });

  useEffect(() => {
    const checkLeadStat = (winnerStat, loserStat) => {
      let leadStat = {
        lead: "",
        stat: Math.max(winnerStat, loserStat),
      };

      if (winnerStat > loserStat) {
        leadStat.lead = winner.name;
        return leadStat;
      }

      if (winnerStat === loserStat) {
        leadStat.lead = "Tie";
        return leadStat;
      }

      if (winnerStat < loserStat) {
        leadStat.lead = loser.name;
        return leadStat;
      }
    };

    setOverallStats({
      strength: checkLeadStat(
        Number(winner.powerstats.strength),
        Number(loser.powerstats.strength)
      ),
      intelligence: checkLeadStat(
        Number(winner.powerstats.intelligence),
        Number(loser.powerstats.intelligence)
      ),
      speed: checkLeadStat(
        Number(winner.powerstats.speed),
        Number(loser.powerstats.speed)
      ),
      durability: checkLeadStat(
        Number(winner.powerstats.durability),
        Number(loser.powerstats.durability)
      ),
      power: checkLeadStat(
        Number(winner.powerstats.power),
        Number(loser.powerstats.power)
      ),
      combat: checkLeadStat(
        Number(winner.powerstats.combat),
        Number(loser.powerstats.combat)
      ),
    });
  }, [winner, loser]);

  return (
    <>
      <Row as="div" className="mt-5 animate__animated animate__fadeInUpBig">
        <Col md="6">
          <img src={winner.image.url} width="65%" alt={winner.name} />
        </Col>
        <Col md="6">
          <h2>Winner: {winner.name}</h2>
          <h4>Stat Comparison</h4>
          <ul className="float-left">
            <li>
              <h4>Strength:</h4>
              <p className="lead">
                {overallStats.strength.lead} - {overallStats.strength.stat}
              </p>
            </li>
            <li>
              <h4>Intelligence:</h4>
              <p className="lead">
                {overallStats.intelligence.lead} -{" "}
                {overallStats.intelligence.stat}
              </p>
            </li>
            <li>
              <h4>Speed:</h4>
              <p className="lead">
                {overallStats.speed.lead} - {overallStats.speed.stat}
              </p>
            </li>
            <Button className="mt-4 btn-danger" onClick={(e) => clearButton()}>Choose New Fighters</Button>
          </ul>

          <ul className="float-right">
            <li>
              <h4>Durability:</h4>
              <p className="lead">
                {overallStats.durability.lead} - {overallStats.durability.stat}
              </p>
            </li>
            <li>
              <h4>Power:</h4>
              <p className="lead">
                {overallStats.power.lead} - {overallStats.power.stat}
              </p>
            </li>
            <li>
              <h4>Combat Skill:</h4>
              <p className="lead">
                {overallStats.combat.lead} - {overallStats.combat.stat}
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Results;
