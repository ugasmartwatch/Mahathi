
Bangle.setLCDPower(1);
Bangle.setLCDTimeout(0);

function getImage() {
  return require("heatshrink").decompress(
atob("qE5xH+AH4A/AH4A/AH4A/AHeBq1WlcAAAUrqwJBwJM/IQJLEABBUBw5N8IotPAAhRHJu+HJolPvWe4XJAAvCz1zkhRDeuuBdIdzzxLGAA+eUwUreeacDJqCkDuah0JwUkJoTiBdg4AJKAZO2z0kA4KjH4RbGUAcAqxOtwJOCHgY6Dp5FEz1PBQUAuYLCvQIDlesJ1eHlaWGJ4YJEzwIDAARlCCYkAwLtucopPH4SdCldWqxmCp5PGlbttGwJPMTwVWrgACW4aqDLwSgqTxBHBkjiE5I/CJwYABNIeeud6KYSgp1iFBTwzoCvQ7BAoQ+CJ4qgCLwS4EUFDuCTwwAHdw4ABXQ4RDd2JPReAV6CQigqaYMkJxpPNuYSId1AyFJ61PCYskgErd25PUeAWsJ8/Cd8Lwow7uRAAITBlZPIvRPIeEjuSAANPCgJOFDpJPCgBPjlcAkhOQ5N6eA5PwwLQIABY8CJ4ptJJ8usGALuSeBCeCNo5iDT0kA4RPSHoUrJwlPDo96BYOBJ0GHTwRPUUAbxBXhYQBlesJ8CACJ63CkhQCAQNzB5DujdoaCKeJ5rLBwTuhZ4VzAQN6J6nJDIQaKf4WHT0TPBFAMkJ6oZDTxDujJwQwCZATwVDISeJvTuhwLtCJIaGLKBwXJEgMr1hOhP4igCp7xWVRTuf1lWEQNzZZAJGADFzdz5ODSpDMBBYLyWAAwgBlaedJwZCJKAUkzzudTzpONZ4gQBzyjYvRPewKPCHhuekhRCKQNzAAJUTNwWsJzsAbx/CvRREDCIADp8AlZPaJyajEudPKYQZTCwJPaJy6mFdyafcJzgAWJ7ROz5NzGYJPWJ2nJvQ0BwJOUw8rJ2fJzxPXqwYBvROxAAI2BqyeUC4NPJ2fJuY4Bw5PSwLt0eAqgTlafCAGo4BleBJ6gA5lZPRqxP7eJY"));
}

var ang = 0;
function draw() {
  ang += 0.1;
  g.drawImage(getImage(), 100, 90, {scale:1.5, rotate: ang});
}
setInterval(draw, 2);
g.setBgColor(-1).setColor(0,0,1); // blue
E.showMessage("", "PARROT PET");
//function Graphics.setRotation(3, )
