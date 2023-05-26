import React from 'react';
import defaultImage from '../defaultImage.jpg';
import css from './Friends.module.css';
import { friendStatus } from './FriendStatus';

export const Friend = ({ element }) => {
  console.log('element', element);
  const { avatar = defaultImage, name, isOnline } = element;
  return (
    <li className={css.item}>
      <span className={isOnline ? 'isOnline' : 'isOffline'}>
        {friendStatus(element)}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
