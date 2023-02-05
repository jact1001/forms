/*function signature() {
    return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<(...params: any[]) => Promise<any>>) => {
        let oldFunc = descriptor.value;
        descriptor.value = async function () {
            let result = await oldFunc.apply(this, arguments);
            result["author"] = {
                name: 'Iván',
                lastname: 'Taimal'
            }
            return result;
        }
    }
}*/

/*const decoratorA = (someBooleanFlag: boolean) => {
    return (target: Function) => {
    }
}*/

const decoratorA = (value: boolean) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {

    }
}
