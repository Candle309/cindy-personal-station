var http = require('http');
var express = require('express');
var app = express();

//server start
var server = http.createServer(app); //create server

app.use('/home', function (req, res) {
    res.sendFile(process.cwd() + '/personal_page/index.html');
});

app.use('/pomodoro_clock', function (req, res) {
    res.sendFile(process.cwd() + '/pomodoro_clock/index.html');
});

app.use('/random_quote_machine', function (req, res) {
    res.sendFile(process.cwd() + '/random_quote_machine/index.html');
});

app.use('/simon_game', function (req, res) {
    res.sendFile(process.cwd() + '/simon_game/index.html');
});

app.use('/game_of_life', function (req, res) {
    res.sendFile(process.cwd() + '/game_of_life/public/index.html');
});

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/personal_page/index.html');
});

app.use('/p_p', express.static(process.cwd() + '/personal_page/public'));
app.use('/p_c', express.static(process.cwd() + '/pomodoro_clock/public'));
app.use('/r_q_m', express.static(process.cwd() + '/random_quote_machine/public'));
app.use('/s_g', express.static(process.cwd() + '/simon_game/public'));
app.use('/g_l/public', express.static(process.cwd() + '/game_of_life/public'));
app.use('/g_l/build', express.static(process.cwd() + '/game_of_life/build'));
app.use('/g_l/src', express.static(process.cwd() + '/game_of_life/src'));

// server.listen("8000");

server.listen(process.env.PORT, process.env.IP, function () {
    var addr = server.address();
    console.log("Chat server listening at", (addr.address || process.env.IP) + ":" + (addr.port || process.env.PORT));
});