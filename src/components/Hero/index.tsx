import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import heroRunSprite from './hero-run.png';
import heroAttackSprite from './hero-attack.png';

export default class Hero extends React.Component {
  state = {
    image: heroRunSprite,
  };

  render() {
    return (
      <Spritesheet
        onClick={() =>
          this.setState({
            image:
              this.state.image === heroRunSprite
                ? heroAttackSprite
                : heroRunSprite,
          })
        }
        image={this.state.image}
        steps={12}
        fps={10}
        direction="forward"
        loop={true}
        widthFrame={900}
        heightFrame={900}
        onLoopComplete={() => {
          this.setState({ image: heroRunSprite });
        }}
      />
    );
  }
}
