var d = new Date();
var weekday = new Array(7);
weekday[0] = 'sunday';
weekday[1] = 'monday';
weekday[2] = 'tuesday';
weekday[3] = 'wednesday';
weekday[4] = 'thursday';
weekday[5] = 'friday';
weekday[6] = 'saturday';

var n = weekday[d.getDay()];
console.log(n)
colorChange()
function colorChange() 
{
var element = document.getElementById(`${n}`);
element.classList.add("color");
}