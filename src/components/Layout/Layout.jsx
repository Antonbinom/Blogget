import style from './Layout.module.css';
import PropTypes, {oneOfType} from 'prop-types';

export const Layout = ({children}) => (<div className={style.container}>{children}</div>);

Layout.propTypes = {
  children: oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ])
};
