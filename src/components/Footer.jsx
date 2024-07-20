import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {  AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import{ReactComponent as CodechefIcon} from '../assets/codechef.svg';
import{ReactComponent as LeetcodeIcon} from '../assets/leetcode.svg';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
			<div className='flex justify-between flex-wrap gap-4'>
				<p className='text-white text-center w-full sm:w-auto font-light'>© {year} Amit. All rights reserved.</p>
				<div className='text-white flex justify-around sm:w-[250px] w-full'>
					
					<a href="amitkojha2802@gmail.com" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FiMail className='text-xl' />
					</a>
					<a href="https://www.leetcode.com/u/Amitojha2802" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
                        <LeetcodeIcon className='text-xl' color='WHITE' />
                    </a>
					
					<a href="https://www.linkedin.com/in/amit-kumar-ojha-84a697263/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<AiFillLinkedin className='text-xl' />
					</a>
					<a href="https://github.com/amitkojha05" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
						<FaGithub className='text-xl' />
					</a>
					<a href="https://www.codechef.com/users/amitkojha" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<CodechefIcon className='text-xl' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;