import React from 'react'
import SoundWave from './lottie-sound-wave.json'
import Lottie from 'react-lottie'

const SoundAnimation: React.FC = () => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: SoundWave,
  }

  return (
    <Lottie
      width={600}
      height={300}
      options={animationOptions}
      style={{ marginTop: '100px' }}
    />
  )
}

export default SoundAnimation
