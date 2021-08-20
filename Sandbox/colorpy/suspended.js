$(function(){
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; 
	var day = now.getDate();
  var count = 0;
  document.getElementById("view_time").innerHTML = year + "年" + mon + "月" + day + "日";

  var date1 = now;
  var date2 = new Date(2021, 6, 31);
  var termDay = (date1 - date2) / 86400000;
  console.log(termDay)

  setTimeout(function(){
    const interval = setInterval(function(){
        now.setDate(now.getDate() - 1);
        year = now.getFullYear();
        mon = now.getMonth()+1; 
        day = now.getDate();
        document.getElementById("view_time").innerHTML = year + "年" + mon + "月" + day + "日";
        count++;
        if(count > termDay - 1){　
          clearInterval(interval);　//intervalIdをclearIntervalで指定している
          document.getElementById("view_time").classList.add("addclass");
          setTimeout(function(){
            window.location.href = 'https://tripledrive.github.io/COLORCUP/Sandbox/colorpy/index.html';
          }, 1.4*1000);
        }
      }, 0.25*1000);
  }, 1*1000);
});