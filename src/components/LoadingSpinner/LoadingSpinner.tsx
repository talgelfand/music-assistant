import React from "react"
import SoundWave from "./sound-wave-loading.json"
import Lottie from "react-lottie"
import * as Styled from "./LoadingSpinner.style"

export interface LoadingSpinnerProps {}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: SoundWave,
  }
  return (
    <Styled.Spinner>
      <Lottie options={animationOptions} />
    </Styled.Spinner>
  )
}

export default LoadingSpinner
