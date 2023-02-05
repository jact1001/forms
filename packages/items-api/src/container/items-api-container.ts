import {Configuration, Inject} from "@tsed/di";
import {PlatformApplication} from "@tsed/common";
import "@tsed/platform-express";
import * as Path from "path";
import {SignatureResponseFilter} from "../infraestructure/filter/signature-filter";

export const rootDir = Path.resolve(__dirname,'../');

console.log('rootDir', rootDir);
/*@Configuration({
    rootDir,
    port: 5000
})*/


@Configuration(
    {
        rootDir: Path.resolve(__dirname, '../'),
        mount: {
            "/api": ["${rootDir}/**/**\/*-controller.ts",
            ]
        },
        componentsScan: [
            "${rootDir}/**/**/\/*-repository.ts",
            "${rootDir}/**/**/**/\/*-service.ts",
            "${rootDir}/**/**/**/\/*-use-case.ts",
            "${rootDir}/**/**\/*-middleware.ts",
            "${rootDir}/**/**\/*-filter.ts"
        ],
        responseFilters: [
            SignatureResponseFilter
        ],
        statics: {
            "/": Path.join(__dirname, "partner-platform.web")
        },
        acceptMimes: ["application/json", "multipart/form-data"],
        port: 5000,
        swagger: [
            {
                path: "/api-docs"
            }
        ]
    }
)
export class ItemsApiContainer {
    @Inject()
    app: PlatformApplication;

    public $beforeRoutesInit() {
        const cookieParser = require('cookie-parser'),
            bodyParser = require('body-parser'),
            compress = require('compression'),
            methodOverride = require('method-override'),
            cors = require('cors');

        this.app
            .use(cors())
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }));
    }
}
