import { School } from './School';
import education from '../../../assets/education.json';
import './education.scss';

type keys = keyof typeof education;

export const Education = () => {
	return (
		<div className='education'>
			<h2>Education</h2>
			{Object.keys(education).map((ed) => (
				<School data={education[ed as keys]} key={ed} />
			))}
		</div>
	);
};
