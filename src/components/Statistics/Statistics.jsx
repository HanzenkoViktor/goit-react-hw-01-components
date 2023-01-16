import {
  SectionStats,
  StatsList,
  StatsItem,
  StatsText,
  StatsTextPersent,
  SectionTitle,
} from './Statistics.styled';

import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <SectionStats>
      {title && <SectionTitle>{title}</SectionTitle>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <StatsText>{label}</StatsText>
            <StatsTextPersent>{percentage}%</StatsTextPersent>
          </StatsItem>
        ))}
      </StatsList>
    </SectionStats>
  );
}

Statistics.defaultProps = {
  stats: [],
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
