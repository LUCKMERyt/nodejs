/**
 * Gulpfile.js - автоматизация вёрстки
 */

// Подключение модулей
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');

// Компиляция SCSS -> CSS
function styles() { // ? Компилируем SCSS в CSS, добавляем префиксы, минифицируем и сохраняем в dist/css
return gulp.src('src/scss/style.scss')  // Берём файл SCSS
        .pipe(sass())                        // Компилируем в CSS
        .pipe(autoprefixer())               // Добавляем -webkit-, -moz-
        .pipe(cleanCSS())                   // Минифицируем (удаляем пробелы)
        .pipe(gulp.dest('./dist/css'))       // Сохраняем в dist/css
        .pipe(browserSync.stream());        // Обновляем в браузере
}

// Копирование HTML
function html() { // ? Копируем все HTML файлы из src в dist
    return gulp.src('src/**/*.html')      // Все HTML из src
        .pipe(gulp.dest('./dist'))        // Копируем в dist
        .pipe(browserSync.stream());   // Обновляем в браузере
}

// Запуск сервера
function serve(done) { // ?  Запускаем сервер из папки dist
    browserSync.init({
        server: { baseDir: './dist' }   // Сервер показывает папку dist
    });
    done();                           // Сигнал что готов
}

// Наблюдение за файлами
function watch() { // ? Следим за изменениями в SCSS и HTML файлах и выполняем соответствующие задачи
    gulp.watch('src/scss/**/*.scss', styles); // При изменении SCSS -> запускаем styles()
    gulp.watch('src/**/*.html', html);      // При изменении HTML -> запускаем html()
}

// Экспорт задач
exports.styles = styles;
exports.html = html;
exports.watch = watch;
exports.serve = serve;

// Dev сервер
gulp.task('default', gulp.series( // ? Сначала компилируем стили и копируем HTML, затем запускаем сервер и наблюдаем за изменениями
    gulp.parallel(styles, html),   // 1. Параллельно компилируем стили и HTML
    serve,                       // 2. Запускает browserSync сервер
    watch                        // 3. Наблюдаем за изменениями
));

// Production сборка
gulp.task('build', gulp.series(     // Выполняем по порядку:
    styles,                     // 1. Компилируем стили
    html                       // 2. Копируем HTML
));
