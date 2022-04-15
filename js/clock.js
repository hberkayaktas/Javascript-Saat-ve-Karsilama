var div_inner = document.getElementById('myClock');
function showTime(){
      
            var tarih = new Date();
            var hh =tarih.getHours();
            var mm =tarih.getMinutes();
            var ss =tarih.getSeconds(ss);

            var haftanin_gunu = [
                  "pazar",
                  "pazartesi",
                  "salı",
                  "çarşamba",
                  "perşembe",
                  "cuma",
                  "cumartesi"];

            var day = tarih.getDay();
            var day_tr = haftanin_gunu[day];

            div_inner.innerHTML = hh+":"+mm+":"+ss+ "  " + day_tr;
     
             
            
}
setInterval(showTime, 1000);

var get_name = prompt("isminiz",);
document.querySelector('#myName').innerHTML += get_name;