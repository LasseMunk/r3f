import { Link } from "react-router-dom";

export const Error404 = () => {
	return (
		<div className='flex flex-col gap-2'>
			<h1>404 Not Found</h1>
			<Link className='text-cyan-400' to='/'>
				Go Home
			</Link>
		</div>
	);
};
