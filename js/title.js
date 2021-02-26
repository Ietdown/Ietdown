var what = "| orbt's site |";
var interval = 100;
var counter = 0;
var tick = function() {
    var i = counter % (what.length * 2);
    if (i == 0) {
        document.title = "orbt's site";
    } else if (i < what.length) {
        document.title = what.substr(0, i);
    } else {
        i -= what.length;
        i = what.length - i;
        document.title = what.substr(-i);
    }
    counter++;
}
setInterval(tick, interval);