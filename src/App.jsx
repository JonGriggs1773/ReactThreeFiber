import { Canvas } from '@react-three/fiber'
import React from 'react'
import Box from './Box'

const App = () => {
	return (
		<Canvas camera={{ position: [0, 0, 2] }}>
			<Box position={[-0.75, 0, 0]} name="A" />
			<Box position={[0.75, 0, 0]} name="B" />
		</Canvas>
	)
}

export default App
