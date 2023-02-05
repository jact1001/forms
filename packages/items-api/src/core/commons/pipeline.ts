export class Pipeline<T> {
    constructor(private param: T) {
    }

    throughFunctions(...funcs: ((param: T) => T)[]): Pipeline<T> {
        funcs.forEach(func => {
            this.param = func(this.param);
        });
        return this;
    }

    return(): T {
        return this.param;
    }
}
