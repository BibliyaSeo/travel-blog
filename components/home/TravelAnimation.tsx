import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/travelAnimation.json";

export default function TravelAnimation() {
  return <Lottie loop animationData={lottieJson} play />;
}
