import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { AdditiveBlending, BufferGeometry } from "three";

// heavily inspired by: https://sbcode.net/react-three-fiber/neural-network/

export const DrawLinesBetweenVerticesScene = () => {
	const particlesRef = useRef<BufferGeometry>(null);

	const maxParticleCount = 1000;
	const particleCount = 500;
	const particleSize = 3;

	// const segment = maxParticleCount * maxParticleCount;

	// since there are xyz pr. vertex
	// const positions = useMemo(() => new Float32Array(segment * 3), [segment]);

	const particlePositions = useMemo(() => new Float32Array(maxParticleCount * 3), [maxParticleCount]);

	useEffect(() => {
		for (let i = 0; i < maxParticleCount; i++) {
			const x = Math.random() * 2 - 1;
			const y = Math.random() * 2 - 1;
			const z = Math.random() * 2 - 1;

			particlePositions[i * 3] = x;
			particlePositions[i * 3 + 1] = y;
			particlePositions[i * 3 + 2] = z;
		}
	});

	return (
		<points>
			<bufferGeometry ref={particlesRef}>
				<bufferAttribute attach={"attributes-position"} count={particleCount} array={particlePositions} itemSize={3} />
			</bufferGeometry>
			<pointsMaterial color='black' size={particleSize} blending={AdditiveBlending} transparent={true} sizeAttenuation={false} />
			<ambientLight intensity={0.5} />
		</points>
	);
};

export const DrawLinesBetweenVertices = () => {
	return (
		<Canvas>
			<DrawLinesBetweenVerticesScene />
			<OrbitControls />
		</Canvas>
	);
};
