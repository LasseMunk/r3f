import { Canvas, Vector3, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Cube = ({ position, size, color }: { position: Vector3; size: [number?, number?, number?, number?, number?, number?]; color: string }) => {
	const ref = useRef<Mesh>(null!);

	const multiplierZ = 0.1;
	const multiplierY = 0.13;

	useFrame((state, delta) => {
		ref.current.rotation.z += delta * multiplierZ;
		ref.current.rotation.y += delta * multiplierY;
		ref.current.position.y = Math.sin(state.clock.getElapsedTime());
	});

	return (
		<mesh position={position} ref={ref}>
			<boxGeometry args={size} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
};

const Sphere = ({ position, args, color }: { position: Vector3; args: [number?, number?, number?]; color: string }) => {
	// https://threejs.org/docs/#api/en/geometries/SphereGeometry
	const ref = useRef<Mesh>(null!);

	const multiplierZ = 0.1;
	const multiplierY = 0.01;
	const scalemultiplierY = 0.1;

	useFrame((state, delta) => {
		ref.current.rotation.z += delta * multiplierZ;
		ref.current.position.y += Math.sin(state.clock.getElapsedTime()) * multiplierY;
		ref.current.scale.y = 0.9 + Math.sin(state.clock.getElapsedTime()) * scalemultiplierY;
	});
	return (
		<mesh position={position} ref={ref}>
			<sphereGeometry args={args} />
			<meshStandardMaterial color={color} wireframe />
		</mesh>
	);
};

const Torus = ({ position, args, color }: { position: Vector3; args: [number?, number?, number?, number?]; color: string }) => {
	// https://threejs.org/docs/#api/en/geometries/TorusGeometry

	return (
		<mesh position={position}>
			<torusGeometry args={args} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
};
const TorusKnot = ({ position, args, color }: { position: Vector3; args: [number?, number?, number?, number?]; color: string }) => {
	// https://threejs.org/docs/#api/en/geometries/TorusGeometry
	const ref = useRef<Mesh>(null!);

	const multiplierZ = 0.1;
	const multiplierY = 0.13;

	useFrame((state, delta) => {
		ref.current.rotation.z += delta * multiplierZ;
		ref.current.rotation.y += delta * multiplierY;
		ref.current.position.y = Math.sin(state.clock.getElapsedTime());
	});

	return (
		<mesh position={position} ref={ref}>
			<torusKnotGeometry args={args} />
			<meshStandardMaterial color={color} wireframe />
		</mesh>
	);
};
export const ExampleOne = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<directionalLight position={[0, 2, 2]} intensity={1.5} />
			{/* <group position={[0, 0, -3]}>
				<Cube position={[0, 0, 0]} size={[1, 1, 1]} color='red' />
				<Cube position={[1, 0, 0]} size={[1, 1, 1]} color='yellow' />
				<Cube position={[0, 1, 0]} size={[1, 1, 1]} color='green' />
				<Cube position={[1, 1, 0]} size={[1, 1, 1]} color='blue' />
				</group> */}
			{/* <Cube position={[0, 0, 0]} size={[1, 1, 1]} color='pink' /> */}
			<Sphere position={[0, 0, 0]} args={[1, 30, 30]} color='pink' />
			{/* <Torus position={[2, 0, 0]} args={[0.5, 0.2, 30, 30]} color='yellow' /> */}
			{/* <TorusKnot position={[-2, 0, 0]} args={[0.5, 0.2, 1000, 50]} color='cyan' /> */}
		</Canvas>
	);
};
