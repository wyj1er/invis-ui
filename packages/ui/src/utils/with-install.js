// 组件前缀
var componentPrefix = 'S';
export function withInstall(options) {
    options.install = function (app) {
        var name = options.name;
        if (name) {
            app.component(componentPrefix + name, options);
        }
    };
    return options;
}
