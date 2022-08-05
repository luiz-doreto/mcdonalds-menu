/* eslint-disable react/destructuring-assignment */
import { Animated, ImageProps } from 'react-native';

const AnimatedImage = (props: ImageProps) => {
  const opacity = new Animated.Value(0);

  const handleOnLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.Image
      onLoad={handleOnLoad}
      {...props}
      style={[
        {
          opacity,
          transform: [
            {
              scale: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.85, 1],
              }),
            },
          ],
        },
        props.style,
      ]}
    />
  );
};

export default AnimatedImage;
