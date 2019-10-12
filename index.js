var start = 0;

function timedCounting(){
    document.getElementById('text').value = start;
    start = start + 1;
    timer = setTimeout(timedCounting, 1000);
}
