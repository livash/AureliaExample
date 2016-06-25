import _ from 'lodash';

export class Colors {
    constructor() {
        this.description = "Guess what color this is. Click on any color tile and find out it's name.";
        this.colors = [
            'red',
            'green',
            'blue',
            'yellow',
            'steelblue',
            'navy',
            'azure',
            'magenta',
            'purple',
            'pink',
            'violet',
            'coral'
        ];
        this.buttonText = "Suffle Colors";
    }

    activate() {
      this.colors = _.shuffle(this.colors);
    }

    onColorClick(colorIdx) {
        let className = `.color-card-${colorIdx}`;
        $(className).toggleClass('color-text-hide');
    }

    shuffleColors() {
        this.colors = _.shuffle(this.colors);
    }
}