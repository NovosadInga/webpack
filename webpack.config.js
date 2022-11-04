const path = require('path')
const process = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // для сборки html
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //Этот плагин извлекает CSS в отдельные файлы
const PostCssPresetEnv = require('postcss-preset-env'); //автопрефиксы и др

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development' //проверяем в каком мы режиме development/production

const target = devMode ? 'web' : 'browserslist'; //определяем для каких браузеров проводим сборку
const devtool = devMode ? 'eval-source-map' : undefined; //если режим разработки до добавляем sourсe-map, чтобы видеть что где находится

module.exports = {
	mode, // development || production
	target,
	devtool,

	devServer: { // настройки сервера
		port: 3000, //порт на котором открывать
		open: true, //сразу открывает браузер
		hot: true

	},
	entry: ["@babel/polyfill", path.resolve(__dirname, 'src', 'index.js')], //точка входа, откуа собирать +полифилы
	output: { //точка выхода, сюда все билдится
		path: path.resolve(__dirname, 'dist'), //куда билдить
		clean: true,   //очищать при каждом билде
		filename: '[name].[contenthash].js', //[name] - имя такое же как как и в src, [contenthash] - добавляет хеш
		assetModuleFilename: 'assets/img/[name][ext]'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html') // собираем html в указаный файл
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		})
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(scss|sass|css)$/,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [PostCssPresetEnv]
							}
						}
					},
					"sass-loader"
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				generator: {
					filename: 'assets/fonts/[name][ext]' //шрифты сохраняются в папку 'fonts/ ([ext] - расширение)
				},
				type: 'asset/resource',
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				use: [
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.90],
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75
							}
						}
					}
				],
				type: 'asset/resource'
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}

}