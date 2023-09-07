import { Contact } from './Contact.style';
import { motion } from 'framer-motion';
import { ContactsHolder } from './ContactsHolder.style';

const contactList = [
	{ name: 'FreeCodeCamp', link: 'https://www.freecodecamp.org/grape' },
	{ name: 'GitHub', link: 'https://github.com/nikGrape' },
	{ name: 'CodePen', link: 'https://codepen.io/nik-grape' },
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/nick-vinogradov-762815172/',
	},
	{
		name: 'Facebook',
		link: 'https://www.facebook.com/profile.php?id=100010069962939',
	},
];

export const Contacts = () => {
	return (
		<section>
			<motion.h1 id='contacts'>
				{'Contacts'.split('').map((letter, i) => (
					<motion.p
						key={`contact-header-letter-${letter}-n${i}`}
						style={{ display: 'inline-block' }}
						whileInView={{
							translateX: ['-10px', '0px'],
							opacity: [0, 1],
						}}
						transition={{
							duration: 0.12,
							delay: i * 0.09,
						}}
					>
						{letter}
					</motion.p>
				))}
			</motion.h1>
			<ContactsHolder id='contact-holder'>
				{contactList.map((item) => (
					<a key={`link-to-${item.name}`} href={item.link} target='_blank'>
						<Contact
							key={`contact-${item.name}`}
							whileHover={{
								scale: 1.2,
								translateY: '-5px',
								transition: { duration: 0.4 },
							}}
						>
							{item.name}
						</Contact>
					</a>
				))}
			</ContactsHolder>
		</section>
	);
};
