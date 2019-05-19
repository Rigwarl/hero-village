import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';

type TAnimationData = {
  from: number;
  to: number;
};

type TProps<T> = {
  image: string;
  data: THashMap<TAnimationData>;
  current: T;
};

const Animation = <T extends string>({ image, data, current }: TProps<T>) => {
  const totalFrames = Object.values(data).sort((a, b) => b.to - a.to)[0].to;

  return (
    <Spritesheet
      image={image}
      steps={totalFrames}
      fps={12}
      direction="forward"
      loop={true}
      widthFrame={900}
      heightFrame={900}
      onEachFrame={(spritesheet: any) => {
        const frame: number = spritesheet.getInfo('frame');
        const { from, to } = data[current];

        if (frame < from || frame >= to) {
          spritesheet.goToAndPlay(from);
        }
      }}
    />
  );
};

export default Animation;
