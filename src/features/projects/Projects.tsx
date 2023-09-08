import './projects.scss';
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
		links: ['#deploy', 'https://github.com/nikGrape/DevConnector/'],
	},
	{
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5V8rPGKWopLGHet9TZxp1euLxtha2gC07w&usqp=CAU',
		header: 'RS React Project',
		desc: desc,
		links: [
			'https://64faad6ad66b7e3073035e44--admirable-blancmange-ad7e59.netlify.app/',
			'https://github.com/nikGrape/RS-REACT-2023',
		],
	},
	{
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVT5K1YUN2v-C8XT8aZ7f6lTS3R2NwRrvNlg&usqp=CAU',
		header: 'Graph QL',
		desc: desc,
		links: [
			'https://rs-graphiql-app-1453.netlify.app/#/main',
			'https://github.com/nikGrape/graphiql-app/pull/1',
		],
	},
];

export const Projects = () => {
	return (
		<section className='pink'>
			<h1 id='projects'>Projects</h1>
			{projectList.map((project) => (
				<Project {...project} key={project.header} />
			))}
		</section>
	);
};
