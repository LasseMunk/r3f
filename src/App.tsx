import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components";
import { Error404, Home } from "./pages";
import { DrawLinesBetweenVertices, ExampleOne } from "./r-three-fiber";

const App = () => {
	return (
		<BrowserRouter basename='/r3f'>
			<div className='flex h-screen'>
				<div>
					<Sidebar />
				</div>
				<div className='bg-gray-100 flex-1'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='*' element={<Error404 />} />
						<Route path='/example-1' element={<ExampleOne />} />
						<Route path='/draw-lines-between-vertices' element={<DrawLinesBetweenVertices />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
