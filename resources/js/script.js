// Adds a zero to numbers under 10
function checkTime(t) 
{
  const num = t;
  
  if (num < 10) {
    num = "0" + num;
  }

  return num;
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