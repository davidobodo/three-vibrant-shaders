const path = require("path");

module.exports = {
    entry: "./src/app.js",
    module: {
        rules: [
            {
                test: /\.(glb|gltf)$/,
                use: [
                    {
                        loader: "file-loader"
                        // options: {
                        //     outputPath: "assets/models/"
                        // }
                    }
                ]
            },
            {
                test: /\.glsl$/,
                loader: "webpack-glsl-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js"]
    },
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "../dist")
    }
};
