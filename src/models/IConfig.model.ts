export interface IConfig {
    DBSERVICE: {
        mongoConnectionString: string;
    },
    APP_LEVEL_CONFIG: {
        port: number;
        environment: "production" | 'development';
        enableUIStaticFolder: boolean;
        whitelist: string;
        authAppPrefixURL: string;
        productAppPrefixURL: string;
        prefixURL: string;
        rootDir: string;
    },
    baseUrl: string
}
