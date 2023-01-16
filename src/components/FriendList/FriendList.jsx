import FriendListItem from 'components/FriendListItem/FriendListItem';
import { FriendNumberList } from './FriendList.styled';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <FriendNumberList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendNumberList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
