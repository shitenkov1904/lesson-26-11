const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware для логирования запросов
app.use((req, res, next) => {
 const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
 fs.appendFile('requests.log', log, (err) => {
 if (err) console.error('Ошибка записи в лог:', err);
 });
 next();
});

// Middleware для статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Счетчик посещений главной страницы
let visitCount = 0;

app.get('/', (req, res) => {
 visitCount++;
 fs.writeFileSync('visits.txt', visitCount.toString());
 res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/data', (req, res) => {
 fs.readFile('server-info.json', 'utf8', (err, data) => {
 if (err) {
 return res.status(500).send('Ошибка чтения файла с данными сервера');
 }
 res.json(JSON.parse(data));
 });
});

app.get('/stats', (req, res) => {
 res.send(`Количество посещений главной страницы: ${visitCount}`);
});

// Обработка 404 ошибок
app.use((req, res) => {
 res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Запуск сервера
app.listen(PORT, () => {
 console.log(`Сервер запущен на http://localhost:${PORT}`);
});
