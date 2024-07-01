import { useState } from "react";
import { SidebarLink, SidebarLinkProps } from "./components";

export const Sidebar = () => {
	const routes: SidebarLinkProps[] = [{ route: "/example-1", text: "example-1" }];

	const [linkSearchText, setLinkSearchText] = useState("");
	const [filteredRoutes, setFilteredRoutes] = useState(routes);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLinkSearchText(e.target.value);
		setFilteredRoutes(routes.filter((route) => route.text.toLowerCase().includes(e.target.value.toLowerCase())));
	};

	return (
		<div className='bg-primary flex flex-col h-screen text-ternary p-2 w-72 gap-2'>
			<h1 className='text-gray-100 text-3xl'>r3f examples</h1>
			<input type='text' placeholder='search..' value={linkSearchText} onChange={handleInputChange} className='bg-gray-200 text-gray-500 p-2 rounded-lg width-full focus:outline-none' />
			<ul>
				<SidebarLink route={"/"} text={"home"} />
				{filteredRoutes.length > 0 ? (
					filteredRoutes.map((route, index) => <SidebarLink key={index} route={route.route} text={route.text} />)
				) : (
					<SidebarLink route={"/"} text={"no algorithms found"} />
				)}
			</ul>
		</div>
	);
};
