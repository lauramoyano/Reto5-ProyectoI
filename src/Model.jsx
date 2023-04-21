import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("static/bb8.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-1.27, 0.33, -0.1]} scale={[102.43, 100, 100.12]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Body_0.geometry}
              material={materials.Body}
            />
          </group>
          <group
            position={[-14.59, 86.67, 5.66]}
            rotation={[-1.51, -0.17, 0.05]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Head_Head_0.geometry}
              material={materials.Head}
            />
          </group>
          <group
            position={[-20.12, 159.25, -25.9]}
            rotation={[-1.51, -0.17, 0.05]}
            scale={[1.36, 1.36, 17.7]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Large_Antenna_White_0.geometry}
              material={materials.White}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Large_Antenna_Black_0.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[-27.36, 146.98, -12.83]}
            rotation={[-1.51, -0.17, 0.05]}
            scale={[1.54, 1.54, 3.21]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Small_Antenna_White_0.geometry}
              material={materials.White}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Small_Antenna_Black_0.geometry}
              material={materials.Black}
            />
          </group>
          <group
            position={[-19.97, 121.78, 45.55]}
            rotation={[-0.55, -0.07, 1.73]}
            scale={12.35}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_Inner_Eye_0.geometry}
              material={materials.Inner_Eye}
            />
          </group>
          <group
            position={[-19.98, 121.8, 45.43]}
            rotation={[-0.55, -0.07, 1.73]}
            scale={13.17}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_White_0.geometry}
              material={materials.White}
            />
          </group>
          <group
            position={[7.73, 112.61, 46.91]}
            rotation={[-0.36, 0.49, 0.93]}
            scale={9.08}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle001_White_0.geometry}
              material={materials.White}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle001_Black_0.geometry}
              material={materials.Black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle001_Material_0.geometry}
              material={materials.Material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("static/bb8.glb");
