// export const routesCategories = ["random", "audio", "vertex displacement"] as const;
// export type RoutesCategories = (typeof routesCategories)[number];

export enum SidebarCategories {
	Random = "_random",
	Audio = "_audio",
	VertexDisplacement = "_vertex displacement",
	System = "_system",
}

export type SidebarCategory = {
	category: SidebarCategories;
	routes: SidebarRoute[];
};

export type SidebarRoute = {
	route: string;
	text: string;
};
