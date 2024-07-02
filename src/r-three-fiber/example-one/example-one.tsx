import { MeshWobbleMaterial, OrbitControls, useHelper } from "@react-three/drei";
import { Canvas, Vector3 } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import { Mesh } from "three";
import * as THREE from "three";

/*
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

	const [isHovered, setIsHovered] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const multiplierZ = 0.1;

	useFrame((state, delta) => {
		const speed = isHovered ? 3 : 0.3;
		ref.current.rotation.z += delta * multiplierZ * speed;
		// ref.current.position.y += Math.sin(state.clock.getElapsedTime()) * multiplierY * speed;
		// ref.current.scale.y = 0.9 + Math.sin(state.clock.getElapsedTime()) * scalemultiplierY;
	});
	return (
		// stop propergation of the event to the parent element
		<mesh
			position={position}
			ref={ref}
			onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
			onPointerLeave={() => setIsHovered(false)}
			onClick={() => setIsClicked(!isClicked)}
			scale={isClicked ? 1.5 : 1}
		>
			<sphereGeometry args={args} />
			<meshStandardMaterial color={isHovered ? "orange" : "lightblue"} wireframe />
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
*/
const TorusKnot = ({ position, args }: { position: Vector3; args: [number?, number?, number?, number?] }) => {
	// https://threejs.org/docs/#api/en/geometries/TorusGeometry
	const ref = useRef<Mesh>(null);

	// useFrame((state, delta) => {
	// 	ref.current.rotation.z += delta * multiplierZ;
	// 	ref.current.rotation.y += delta * multiplierY;
	// 	ref.current.position.y = Math.sin(state.clock.getElapsedTime());
	// });

	const { color, radius } = useControls({
		color: { value: "#ff0000", label: "Color" },
		radius: { value: 1, min: 0.1, max: 5, label: "Radius" },
	});

	// const color = new THREE.Color(0xff6363);

	return (
		<mesh position={position} ref={ref}>
			<torusKnotGeometry args={[radius, ...args]} />
			{/* <meshStandardMaterial color={color} wireframe /> */}
			<MeshWobbleMaterial speed={0.3} factor={4} color={color} />
		</mesh>
	);
};

const ExampleOneScene = () => {
	const directionalLightRef = useRef<THREE.DirectionalLight>(null!);

	useHelper(directionalLightRef, THREE.DirectionalLightHelper, 0.5, "white");

	const { lightColor, lightIntensity } = useControls({
		lightColor: { value: "#ffffff", label: "Light Color" },
		lightIntensity: { value: 1.5, min: 0, max: 4, label: "Light Intensity" },
	});

	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight position={[0, 2, 2]} intensity={lightIntensity} ref={directionalLightRef} color={lightColor} />
			{/* <group position={[0, 0, -3]}>
				<Cube position={[0, 0, 0]} size={[1, 1, 1]} color='red' />
				<Cube position={[1, 0, 0]} size={[1, 1, 1]} color='yellow' />
				<Cube position={[0, 1, 0]} size={[1, 1, 1]} color='green' />
				<Cube position={[1, 1, 0]} size={[1, 1, 1]} color='blue' />
				</group> */}
			{/* <Cube position={[0, 0, 0]} size={[1, 1, 1]} color='pink' /> */}
			{/* <Sphere position={[0, 0, 0]} args={[1, 30, 30]} color='pink' /> */}
			{/* <Torus position={[2, 0, 0]} args={[0.5, 0.2, 30, 30]} color='yellow' /> */}
			<TorusKnot position={[0, 0, 0]} args={[0.2, 1000, 50]} />
			<OrbitControls enableZoom={false} />
		</>
	);
};

export const ExampleOne = () => {
	return (
		<Canvas>
			<ExampleOneScene />
		</Canvas>
	);
};
