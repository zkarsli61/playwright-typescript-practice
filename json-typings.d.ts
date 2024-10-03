// we use this file due to https://www.infinetsoft.com/Post/cannot-find-module-consider-using-resolvejsonmodule-to-import-module-with-json-extension-angular/3094

declare module "*.json" {
    const value: any;
    export default value;
}