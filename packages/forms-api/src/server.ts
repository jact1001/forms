import {Configuration, Inject} from "@tsed/di";
import {PlatformApplication} from "@tsed/common";
import "@tsed/platform-express";
import * as Path from "path";
import {SignatureResponseFilter} from "./infraestructure/filters/signature-filter";
import * as rest from "./infraestructure/api";

export const rootDir = Path.resolve(__dirname,'../');
const config = require("dotenv").config({path: "../../.env"});
import * as cors from "cors";

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
            "${rootDir}/**/**/\/*-service.ts",
            "${rootDir}/**/**/\/*-use-case.ts",
            "${rootDir}/**/**/\/*-middlewares.ts",
            "${rootDir}/**/**/\/*-filters.ts"
        ],
        responseFilters: [
            SignatureResponseFilter
        ],
        statics: {
            "/": Path.join(__dirname, "partner-platform.web")
        },
        acceptMimes: ["application/json", "multipart/form-data"],
        port: 5001,
        mongoose: {
            url: config.parsed.mongoose_url,
            connectionOptions: {}
        },
    }
)
export class Server {
    @Inject()
    protected app: PlatformApplication;

    public $beforeRoutesInit() {
        const cookieParser = require('cookie-parser'),
            bodyParser = require('body-parser'),
            compress = require('compression'),
            methodOverride = require('method-override'),
            cors = require('cors');

        const corsOptions: cors.CorsOptions = {
            origin: "http://localhost:3000",
            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true,
        };

        this.app
            .use(cors(corsOptions))
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }));
    }
}
