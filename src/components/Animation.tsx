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
      widthFrame={300}
      heightFrame={300}
      style={{
        width: '300px',
        height: '300px',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
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
