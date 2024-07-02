import { useState } from "react";
import { SidebarCategories, SidebarCategory } from "./sidebar-types";
import { SidebarRouteItem } from "./components";
import { SidebarCategoryItem } from "./components/sidebar-category-item";

export const Sidebar = () => {
	const routesCategories: SidebarCategory[] = [
		{ category: SidebarCategories.System, routes: [{ route: "/home", text: "home" }] },
		{ category: SidebarCategories.Random, routes: [{ route: "/example-1", text: "example-1" }] },
		{ category: SidebarCategories.Audio, routes: [] },
		{ category: SidebarCategories.VertexDisplacement, routes: [] },
	];

	const [linkSearchText, setLinkSearchText] = useState("");
	const [filteredRoutes, setFilteredRoutes] = useState(routesCategories);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLinkSearchText(e.target.value);
		setFilteredRoutes(routesCategories.filter((category) => category.routes.filter((route) => route.text.toLowerCase().includes(e.target.value.toLowerCase()))));
	};

	return (
		<div className='bg-primary flex flex-col h-screen text-ternary p-2 w-72 gap-2'>
			<h1 className='text-gray-100 text-3xl'>r3f examples</h1>
			<input type='text' placeholder='search..' value={linkSearchText} onChange={handleInputChange} className='bg-gray-200 text-gray-500 p-2 rounded-lg width-full focus:outline-none' />
			<ul>
				{filteredRoutes.length > 0 ? (
					filteredRoutes.map((category) => (
						<>
							<SidebarCategoryItem key={category.category} text={category.category} />
							{category.routes.map((route, index) => (
								<SidebarRouteItem key={`${route.text}_${index}`} route={route.route} text={route.text} />
							))}
						</>
					))
				) : (
					<SidebarRouteItem route={"/"} text={"no algorithms found"} />
				)}
			</ul>
		</div>
	);
};
