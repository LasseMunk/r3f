import { Link } from "react-router-dom";

export type SidebarLinkProps = {
	route: string;
	text: string;
};

export const SidebarLink = (props: SidebarLinkProps) => {
	const { route, text } = props;

	return (
		<Link to={route}>
			<li className='text-gray-200 text-sm flex items-center gap-x-4 p-2 rounded-md mt-2 mx-2 hover:bg-gray-200 hover:text-gray-500'>
				<span>{text}</span>
			</li>
		</Link>
	);
};
