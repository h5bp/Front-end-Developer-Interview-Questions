const exports = Object.assign({
    "myfunction": (a) => { console.log(`the square of ${a} is ${a*a}`) }
}, {
    "__main__": () => exports.myfunction(Math.PI)
});

if (process.argv.length > 1 && import.meta) {
    import("querystring").then(querystring => {
        if (`file:///${process.argv[1].replace(/\\/g, "/")}` === querystring.unescape(import.meta.url)) {
            exports.__main__();
        }
    });
}

export default exports;