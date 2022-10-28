import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/tripAnimation.json";

export default function TripAnimation() {
  return <Lottie loop animationData={lottieJson} play />;
}
