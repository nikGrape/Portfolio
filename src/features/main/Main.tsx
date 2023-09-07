import './main.scss';
import { Resume } from '../resume/Resume';
import { Projects } from '../projects/Projects';
import { Intro } from '../intro/Intro';
import { Experience } from '../experience/Experience';
import { Menu } from '../navbar/Menu';
import { Contacts } from '../contacts/Contacts';
import { About } from '../about/About';

export const Main = () => {
	return (
		<div className='main'>
			<div className='spacer layer-3 flip'></div>
			<Intro />
			<Menu />
			<div className='spacer layer-3'></div>
			<Resume />
			<Experience />
			<div className='spacer layer-2'></div>
			<Projects />
			<div className='spacer layer-1'></div>
			<Contacts />
			<div className='spacer layer-4'></div>
			<About />
		</div>
	);
};
