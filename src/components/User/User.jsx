import {
  UserCard,
  Description,
  UserName,
  UserInfo,
  UserStatsList,
  UserStatsItem,
  UserStatsLabel,
  UserStatsQuantity,
} from './User.styled';

import PropTypes from 'prop-types';

export default function User({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <UserCard>
      <Description>
        <img src={avatar} alt="User avatar" className="avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <UserStatsList>
        <UserStatsItem>
          <UserStatsLabel>Followers</UserStatsLabel>
          <UserStatsQuantity>{followers}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Views</UserStatsLabel>
          <UserStatsQuantity>{views}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Likes</UserStatsLabel>
          <UserStatsQuantity>{likes}</UserStatsQuantity>
        </UserStatsItem>
      </UserStatsList>
    </UserCard>
  );
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
