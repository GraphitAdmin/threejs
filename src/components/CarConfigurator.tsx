import React, {useState, Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {Car} from './Car'
import {ColorPicker} from './ColorPicker'
import {Toggle} from './Toggle'

export default function CarConfigurator() {
    const [bodyColor, setBodyColor] = useState<string>('#ff0000')
    const [wheelColor, setWheelColor] = useState<string>('#333333')
    const [tireColor, setTireColor] = useState<string>('#111111')
    const [spoilerVisible, setSpoilerVisible] = useState<boolean>(true)

    return (
        <div className="w-full h-[600px] relative">
            <Canvas camera={{position: [5, 2, 5]}}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5}/>
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                    <pointLight position={[-10, -10, -10]}/>
                    {
                        // @ts-ignore
                        <Car
                            bodyColor={bodyColor}
                            wheelColor={wheelColor}
                            tireColor={tireColor}
                            spoilerVisible={spoilerVisible}
                        />
                    }
                    <OrbitControls/>
                </Suspense>
            </Canvas>
            <div className="absolute top-4 left-4 space-y-4">
                <ColorPicker label="Колір кузова" color={bodyColor} onChange={setBodyColor}/>
                <ColorPicker label="Колір дисків" color={wheelColor} onChange={setWheelColor}/>
                <ColorPicker label="Колір шин" color={tireColor} onChange={setTireColor}/>
                <Toggle label="Спойлер" checked={spoilerVisible} onChange={setSpoilerVisible}/>
            </div>
        </div>
    )
}

