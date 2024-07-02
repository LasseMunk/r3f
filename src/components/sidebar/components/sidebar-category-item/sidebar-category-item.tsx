import { SidebarRouteItem } from "../sidebar-link-item";
import { SidebarCategoryItemProps } from "./sidebar-category-item-types";

export const SidebarCategoryItem = (props: SidebarCategoryItemProps) => {
	const { text, routes } = props;

	return (
		<div className='text-gray-100 text-lg flex flex-col gap-x-4 p-2'>
			<span>{text}</span>
			<ul>
				{routes.map((route, index) => (
					<SidebarRouteItem key={`${route.text}_${index}`} route={route.route} text={route.text} />
				))}
			</ul>
		</div>
	);
};
