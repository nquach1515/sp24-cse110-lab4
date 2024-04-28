function printTime() {
    let d = new Date()
    let time = d.toLocaleDateTimeString();
    console.log(time)
}

// 1000 ms = 1 sec
setInterval(printTime, 1000);