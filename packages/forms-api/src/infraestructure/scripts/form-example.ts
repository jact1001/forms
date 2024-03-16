import { FormFakeData } from "./form-fake";

function main() {
    const formFakeData: FormFakeData = new FormFakeData();
    console.log(JSON.stringify(formFakeData.getFormFake()));
}

main();