(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    const birthdayID = document.getElementById('birthdayID')  
    
  
    const checkingDate = new Date()
    let result = false
    if((checkingDate.getUTCMonth() + 1) >= 3 && checkingDate.getUTCDate() > 17){
      result = true
    } 

    birthdayID.innerText = `${result? Number(checkingDate.getFullYear()) + 1 - 1992 : Number(checkingDate.getFullYear()) - 1992}`   

    let birthday = `March 17, ${result? Number(new Date().getFullYear())+1 :new Date().getFullYear()} 00:00:00`,
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "It's my birthday!";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());