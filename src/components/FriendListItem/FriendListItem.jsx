import { FriendLi, FriendStatus, FriendName } from './FriendListItem.styled';

import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendLi>
      <FriendStatus status={isOnline} />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendLi>
  );
}

FriendListItem.defaultProps = {
  avatar:
    'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

// ----------------------//

// {/* // <li class="item">
// //   <span class="status"></span>
// //   <img class="avatar" src="" alt="User avatar" width="48" />
// //   <p class="name"></p>
// // </li>; */}
