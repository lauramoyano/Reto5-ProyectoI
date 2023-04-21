import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Floor from './Floor'
import Image from './Image'
import Video from './Video'
import {  Model } from './Model'


export default function Experience() {


    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />
        <spotLight  castShadow position={[0, 3, -6]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Floor/>
        <Model position-y={2.6} position-z={6} position-x={6} scale={0.05} castShadow/>
        <Image/>
        <Video/>
    
    </>
}