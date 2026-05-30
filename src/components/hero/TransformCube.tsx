import { cubeFaces } from '../../data/siteContent'
import { useCubeRotation } from '../../hooks/useCubeRotation'
import { CubeFace } from './CubeFace'

const faceTransforms = [
  'cube-face-front',
  'cube-face-bottom',
  'cube-face-back',
  'cube-face-top',
]

export function TransformCube() {
  const cubeRef = useCubeRotation()

  return (
    <div className="perspective-hero relative z-10 flex h-[40vh] w-[40vh] max-h-[min(50vh,90vw)] max-w-[min(50vh,90vw)] items-center justify-center md:h-[50vh] md:w-[50vh]">
      <div
        ref={cubeRef}
        className="preserve-3d relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {cubeFaces.map((face, index) => (
          <CubeFace
            key={face.label}
            label={face.label}
            image={face.image}
            transformClass={faceTransforms[index]}
            eager={index === 0}
          />
        ))}
      </div>
    </div>
  )
}
