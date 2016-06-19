export class Colors {
    constructor() {
        this.colors = [
            'red',
            'green',
            'blue',
            'yellow'
        ];
    }

    onColorClick(colorIdx) {
        let $el = $(`.color-card-${colorIdx}`);
        $el.toggleClass('color-text-hide');
    }
}