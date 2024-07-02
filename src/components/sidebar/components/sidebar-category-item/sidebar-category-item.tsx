import { SidebarCategoryItemProps } from "./sidebar-category-item-types";

export const SidebarCategoryItem = (props: SidebarCategoryItemProps) => {
	const { text } = props;

	return (
		<div className='text-gray-100 text-lg flex items-center gap-x-4 p-2 rounded-md mt-2 mx-2'>
			<span>{text}</span>
		</div>
	);
};
