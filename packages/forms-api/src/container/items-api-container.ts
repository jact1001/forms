import {Configuration, Inject} from "@tsed/di";
import {PlatformApplication} from "@tsed/common";
import "@tsed/platform-express";
import * as Path from "path";
import {SignatureResponseFilter} from "../infraestructure/filter/signature-filter";
import * as rest from "../infraestructure/api/index";

export const rootDir = Path.resolve(__dirname,'../');
const config = require("dotenv").config({path: "../../.env"});

@Configuration(
    {
        rootDir: Path.resolve(__dirname, '../'),
        mount: {
            "/api": [
                ...Object.values(rest)
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
        ],
        mongoose: {
            url: config.parsed.mongoose_url,
            connectionOptions: {}
        },
    }
)
export class ItemsApiContainer {
    @Inject()
    protected app: PlatformApplication;

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
