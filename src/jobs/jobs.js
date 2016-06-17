export class Jobs {
    canActivate(params, routeCOnfig, navigationInstruction) {
        var promise = new Promise((resolve, reject) => {
            setTimeout(_ => {
                resolve(false);
            }, 3000);
        });

        return promise;
    }
}