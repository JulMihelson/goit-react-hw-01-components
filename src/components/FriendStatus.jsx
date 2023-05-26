import css from './Friends.module.css';
import symbolDefs from './symbol-defs.svg'

export const friendStatus = (element) => {
  const { isOnline } = element;
  if (isOnline) {
    return (
      <svg className={ css.smile} width="30" height="30">
  <use xlinkHref={`${symbolDefs}#icon-smile`}></use>
</svg>
    );
  } else {
    return (
      <svg className={ css.sad} width="30" height="30">
        
  <use xlinkHref={`${symbolDefs}#icon-sad`}></use>
</svg>
    );
  }
};
