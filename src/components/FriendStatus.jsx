import css from './Friends.module.css';



export const friendStatus = (element) => {
  const { isOnline } = element;
  if (isOnline) {
    return (
      <svg width="16" height="16">
  <use xlinkHref="../symbol-defs.svg#icon-smile"></use>
</svg>
    );
  } else {
    return (
      <svg width="16" height="16">
        
  <use xlinkHref="../symbol-defs.svg#icon-sad"></use>
</svg>
    );
  }
};
