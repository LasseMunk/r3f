import { useState } from "react";
import { SidebarCategories, SidebarCategory } from "./sidebar-types";
import { SidebarCategoryItem } from "./components/sidebar-category-item";

export const Sidebar = () => {
	const routesCategories: SidebarCategory[] = [
		{ category: SidebarCategories.System, routes: [{ route: "/", text: "home" }] },
		{ category: SidebarCategories.Random, routes: [{ route: "/example-1", text: "example-1" }] },
		{ category: SidebarCategories.Audio, routes: [] },
		{ category: SidebarCategories.VertexDisplacement, routes: [] },
	];

	const [linkSearchText, setLinkSearchText] = useState("");
	const [filteredCategoriesWithRoutes, setFilteredCategoriesWithRoutes] = useState(routesCategories);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLinkSearchText(e.target.value);
		const newCategoriesWithRoutes = routesCategories.filter((category) => category.routes.some((route) => route.text.toLowerCase().includes(e.target.value.toLowerCase())));
		setFilteredCategoriesWithRoutes(newCategoriesWithRoutes);
	};

	return (
		<div className='bg-primary flex flex-col h-screen text-ternary p-2 w-72 gap-2'>
			<h1 className='text-gray-100 text-3xl'>r3f examples</h1>
			<input type='text' placeholder='search..' value={linkSearchText} onChange={handleInputChange} className='bg-lightGrey text-darkGrey p-2 rounded-lg width-full focus:outline-none' />

			{filteredCategoriesWithRoutes.map((category) => category.routes.length > 0 && <SidebarCategoryItem routes={category.routes} key={category.category} text={category.category} />)}
		</div>
	);
};
