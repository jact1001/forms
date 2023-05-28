import {Server} from "./server";
import {PlatformExpress} from "@tsed/platform-express";
import {$log} from "@tsed/common";

async function main() {
    try {
        $log.debug("Start items API...");
        const platform = await PlatformExpress.bootstrap(Server);

        await platform.listen();
        $log.debug("items API initialized");
    } catch (er) {
        $log.error(er);
    }
}

main();
