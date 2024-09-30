// stand-in for an asynchronous service

const fortunes = [
    "Chueli streichle",
    "Chueli mälche",
    "Chälbli gaume",
];

function fortuneService(whenDone) {
    setTimeout(
        () => whenDone(fortunes[Math.floor((Math.random() * fortunes.length))]),
        Math.floor((Math.random() * 3000))
    );
}
