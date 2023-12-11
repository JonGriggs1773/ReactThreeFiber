import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = (props) => {
	const ref = useRef()
	const [hover, setHover] = useState(false)
	const [rotate, setRotate] = useState(false)

	//! useFrame provides _(state) which is equal to state, and delta variable used to establish time since last frame
	//! useFrame executes for every frame or about 60 fps on average
	useFrame((state, delta) => {
		//! This is the rotation of the boxes
		if (rotate) {
			ref.current.rotation.x += 1 * delta
			ref.current.rotation.y += 1 * delta
		}
		//! This line makes the boxes move up and down
		//! To slow down the waving, you can just divide this whole line by whatever number you want; speed up by multiplying
		// ref.current.position.y = Math.sin(state.clock.getElapsedTime())
	})

	return (
		<mesh
			{...props}
			ref={ref}
			scale={hover ? [1.1, 1.1, 1.1] : [1, 1, 1]}
			onPointerDown={() => setRotate(!rotate)}
			onPointerOver={() => setHover(!hover)}
			onPointerOut={() => setHover(!hover)}>
			<boxGeometry />
			<meshBasicMaterial color={hover ? 0xff0000 : 0x00ff00} wireframe />
		</mesh>
	)
}

export default Box
