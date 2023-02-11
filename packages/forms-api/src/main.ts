import {ItemsApiContainer} from "./container/items-api-container";
import {PlatformExpress} from "@tsed/platform-express";
import {$log} from "@tsed/common";

async function main() {
    try {
        $log.debug("Start items API...");
        const platform = await PlatformExpress.bootstrap(ItemsApiContainer);

        await platform.listen();
        $log.debug("items API initialized");
    } catch (er) {
        $log.error(er);
    }
}

main();
