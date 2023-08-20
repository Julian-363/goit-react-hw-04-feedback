import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledStatistics,
  Title,
  Stat,
  TotalStat,
  PercentageStat,
} from '../styles/Statistics.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMeh, faFrown } from '@fortawesome/free-solid-svg-icons';

const Statistics = ({ good, neutral, bad, total }) => {
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  return (
    <StyledStatistics>
      <Title>Statistics</Title>
      <Stat>
        <FontAwesomeIcon icon={faSmile} /> Good: {good}
      </Stat>
      <Stat>
        <FontAwesomeIcon icon={faMeh} /> Neutral: {neutral}
      </Stat>
      <Stat>
        <FontAwesomeIcon icon={faFrown} /> Bad: {bad}
      </Stat>
      <TotalStat>Total: {total}</TotalStat>
      <PercentageStat positive={positivePercentage > 0}>
        Positive feedback percentage: {positivePercentage}%
      </PercentageStat>
    </StyledStatistics>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
