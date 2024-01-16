import {Configuration, Inject} from "@tsed/di";
import {PlatformApplication} from "@tsed/common";
import "@tsed/platform-express";
import * as Path from "path";
import {SignatureResponseFilter} from "./infraestructure/filters/signature-filter";
import * as rest from "./infraestructure/api";
import * as cors from "cors";
const MONGOOSE_URL = process.env.MONGOOSE_URL || '';
const ENVIRONMENT = process.env.ENVIRONMENT || 'DEV';
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
        port: 8080,
        mongoose: {
            url: MONGOOSE_URL,
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
            origin: this.getAllowOrigins(),
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
    /**
     * Return the origins allowed to use the API
     * **/
    private getAllowOrigins(): string {
        if(ENVIRONMENT != "DEV"){
            return "https://dsb471zsol61i.cloudfront.net"
        }
        return "http://localhost:3000"
    }
}
