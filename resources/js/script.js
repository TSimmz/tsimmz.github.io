// Adds a zero to numbers under 10
function checkTime(i) 
{  
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
  
// Runs the clock on the page
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  h = (h > 12) ? h - 12 : h;

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('time').innerText = h + ":" + m + ":" + s;
  
  t = setTimeout(function() {
    startTime()
  }, 500);
}

startTime();