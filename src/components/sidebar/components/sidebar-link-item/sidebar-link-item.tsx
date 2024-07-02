import { Link } from "react-router-dom";
import { SidebarRoute } from "../../sidebar-types";

export const SidebarRouteItem = (props: SidebarRoute) => {
	const { route, text } = props;

	return (
		<Link to={route}>
			<li className='text-gray-200 text-sm p-2 mt-2 mx-2 rounded-md hover:bg-gray-200 hover:text-gray-500'>
				<span>{text}</span>
			</li>
		</Link>
	);
};
