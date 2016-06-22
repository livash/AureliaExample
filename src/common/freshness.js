export class FreshnessValueConverter {
    toView(value) {
        console.log({
            SSSS: value,
            date: new Date(),
            delta: new Date() - value
        });
        if (Math.floor((new Date() - value) / 1000 ) > 10)
            return 'red';
        if (Math.floor((new Date() - value) / 1000 ) > 5)
            return 'yellow';
        else
            return 'yellow';
    }
}