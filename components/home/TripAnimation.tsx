import React from "react";

import Lottie from "react-lottie-player";

import lottieJson from "../../public/tripAnimation.json";

export default function TripAnimation() {
  return <Lottie loop animationData={lottieJson} play />;
}
