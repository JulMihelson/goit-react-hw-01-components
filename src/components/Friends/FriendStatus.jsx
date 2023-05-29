import css from '../Friends/Friends.module.css';
import symbolDefs from '../../data/selection.json'


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

