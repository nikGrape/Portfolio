import './projects.scss';
import sun from '../../assets/sun.svg';
import { Project } from './Project';

const desc = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
debitis, autem consequatur assumenda iure eos facilis reprehenderit
architecto adipisci labore magnam nulla temporibus unde ab pariatur
nihil nemo dignissimos doloribus.`;

const projectList = [
	{
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7XyftXRkio5Qr3GHys9qmQIsq0Cd8MWFpdMQa2jIZoTnkf48QFgaY9TdjLhcPP6Ra0Q&usqp=CAU',
		header: 'DevConnector',
		desc: 'Tech stack: MongoDB, ExpressJS, ReactJS, NodeJS.						This is a full-stack MERN stack application. It is a small social network app that includes authentication, profiles, and forum posts.',
		links: ['https://github.com/nikGrape/DevConnector/', ''],
	},
	{
		image:
			'https://github.com/nikGrape/DevConnector/blob/main/client/src/img/icon.png',
		header: 'RS React Project',
		desc: desc,
		links: ['', ''],
	},
	{
		image:
			'https://github.com/nikGrape/DevConnector/blob/main/client/src/img/icon.png',
		header: 'Graph QL',
		desc: desc,
		links: ['', ''],
	},
];

export const Projects = () => {
	return (
		<section className='pink'>
			<img className='sun' src={sun} alt='sun-picture' />
			<h1 id='projects'>Projects</h1>
			{projectList.map((project) => (
				<Project {...project} key={project.header} />
			))}
		</section>
	);
};
