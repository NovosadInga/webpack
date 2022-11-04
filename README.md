# Webpack basic template

## Описание

Стартовый webpack.config с подключением всех основных модулей


- `Browserslist`— это тот инструмент, с помощью которого можно описать целевые браузеры веб-приложения, используя простые выражения: 
```
    last 2 versions
    not dead
    >0.5%
```
(Браузеры за последниx 2-x версий, браузеры должны быть «живыми»,браузеры у которых больше 0.5% пользователей)
Настройки находятся в .browserslistrc
[Ссылка на repo](https://github.com/browserslist/browserslist)

- `webpack-dev-server`
```  
    npm install webpack-dev-server --save-dev
```
Предоставляет Node.js API, который можно использовать непосредственно в среде выполнения Node.js.

- `webpack-cli`
```  
    npm install --save-dev webpack-cli
```
Предоставляет разработчикам гибкий набор команд для увеличения скорости при настройке пользовательского проекта веб-пакета.

- `html-webpack-plugin`
```  
    npm install --save-dev html-webpack-plugin
```
HtmlWebpackPlugin упрощает создание файлов HTML для обслуживания ваших пакетов веб-пакетов.

- `html-loader`
```  
    npm install --save-dev html-loader
```
Для импорта html.

- `style-loader`
```  
    npm install --save-dev style-loader
```
Внедрить CSS в DOM.

- `mini-css-extract-plugin`
```  
    npm install --save-dev mini-css-extract-plugin
```
Этот плагин извлекает CSS в отдельные файлы. Он создает файл CSS для каждого файла JS, который содержит CSS. Он поддерживает загрузку по требованию CSS и SourceMaps.
- `sass-loader sass`
```  
    npm install sass-loader sass --save-dev
```
Загружает файл Sass/SCSS и компилирует его в CSS.

- `postcss-loader postcss postcss-preset-env`
```  
    npm install --save-dev postcss-loader postcss postcss-preset-env
```
Загрузчик для обработки CSS с помощью PostCSS (автопрефиксы и др).
- `babel-loader @babel/core @babel/preset-env`
```  
    npm install -D babel-loader @babel/core @babel/preset-env
```
babel-loader (транспиллер для перевода с ES6+ в ES5)
- `@babel/polyfill`
```  
    npm install --save @babel/polyfill
```
Добавляем babel polyfill 
- `image-webpack-loader` 
```  
    $ npm install image-webpack-loader --save-dev
```
	для работы с картинками (сжатие и др)
