# Автоматизированная вёрстка с Gulp

Проект для автоматизации процесса вёрстки с использованием Node.js и Gulp.

## Структура проекта

```
node_gulp/
├── dist/                    # Готовые файлы (результат сборки)
│   ├── index.html
│   └── css/
│       └── style.css
├── node_modules/            # Установленные зависимости
├── src/                    # Исходные файлы
│   ├── scss/
│   │   └── style.scss     # SCSS стили
│   └── index.html          # HTML шаблон
├── gulpfile.js            # Конфигурация Gulp задач
├── package.json          # Зависимости npm
└── README.md             # Этот файл
```

## Установка

```bash
npm install
```

## Команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev сервера с live-reload |
| `npm run build` | Production сборка |

## Возможности

- **SCSS препроцессор** - используйте переменные, миксины, вложенность
- **Компиляция** - SCSS автоматически компилируется в CSS
- **Минификация** - CSS сжимается для продакшена
- **Автопрефиксы** - автоматическое добавление вендорных префиксов
- **Live-reload** - BrowserSync обновляет страницу при изменениях

## Пример SCSS

```scss
$primary: #007bff;

.btn {
  background: $primary;
  &:hover {
    background: darken($primary, 10%);
  }
}
```

## Зависимости

- gulp@4.0.2
- gulp-sass@5.1.0
- gulp-clean-css@4.0.0
- gulp-autoprefixer@8.0.0
- browser-sync@2.29.3
