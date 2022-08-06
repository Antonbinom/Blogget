import style from './AuthLoader.module.css';
import SynchLoader from 'react-spinners/SyncLoader';
export const AuthLoader = () => {
	console.log(style);
	return (
		<SynchLoader css={{display: 'block'}} size={10} color='#cc6633' />
	);
};
