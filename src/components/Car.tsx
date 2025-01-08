import React from 'react'
import { useGLTF } from '@react-three/drei'
// @ts-ignore
export function Car({bodyColor, wheelColor, tireColor, spoilerVisible }) {
    const { nodes, materials } = useGLTF('./car.glb')
    console.log(nodes)
    return (
        <group>
            {
                // @ts-ignore
            <mesh geometry={nodes.Body.geometry}>
                <meshStandardMaterial color={bodyColor} />
            </mesh>
            }
            {
                // @ts-ignore
            <mesh geometry={nodes.Wheels.geometry}>
                <meshStandardMaterial color={wheelColor} />
            </mesh>
            }
            {
                // @ts-ignore
            <mesh geometry={nodes.Tires.geometry}>
                <meshStandardMaterial color={tireColor} />
            </mesh>
            }
            {spoilerVisible && (
                // @ts-ignore
                <mesh geometry={nodes.Spoiler.geometry}>
                    <meshStandardMaterial color={bodyColor} />
                </mesh>
            )}
        </group>
    )
}