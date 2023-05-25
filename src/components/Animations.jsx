import { useLottie } from "lottie-react";


const Animations = (props) => {
  const options = {
    animationData: props.animation,
    loop: props.loop, // boolean
    autoplay: props.autoplay, // boolean type
  };

  const { View } = useLottie(options);

  return View;
};

export default Animations;