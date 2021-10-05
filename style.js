let dayss = document.getElementById("days");
let hourss = document.getElementById("hours");
let minutess = document.getElementById("minutes");
let secondss = document.getElementById("seconds");
let countDownDate = new Date("May 20, 2022 12:00:00").getTime();
let closebtn = document.getElementById("mySidenav");
let openbtn = document.getElementById('openbtn');

// $('.nextpage h3').click(function(){


//     $('.nextpage  p').show();
// })

// $('h3').click(function(){

//     console.log(this.next());
   
// })

// the function of the accordion

function initAcc(elem, option){
    //addEventListener on mouse click
    document.addEventListener('click', function (e) {
        //check is the right element clicked
        if (!e.target.matches(elem+' .a-btn')) return;
        else{
            //check if element contains active class
            if(!e.target.parentElement.classList.contains('active')){
                if(option==true){
                     //if option true remove active class from all other accordions 
                    var elementList = document.querySelectorAll(elem +' .a-container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active');
                    });
                }    
                //add active class on cliked accordion     
                e.target.parentElement.classList.add('active');
            }else{
                //remove active class on cliked accordion     
                e.target.parentElement.classList.remove('active');
            }
        }
    });
}
//activate accordion function
initAcc('.accordion', true);



// the count down functions

function got_the_time(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
let now = new Date().getTime();
let timeleft = countDownDate - now;
if(timeleft > 0 ){
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    dayss.innerHTML = `<span>${days}</span>` + ' days';
    hourss.innerHTML = `<span>${hours}</span>` + ' hour';
    minutess.innerHTML = `<span>${minutes}</span>` + ' minutes';
    // secondss.style.color = `rgb(${r},${g},${b})`;
    secondss.style.backgroundColor = `rgb(${r},${g},${b})`;
    secondss.style.borderRadius = '20px';
    secondss.innerHTML = `<span>${seconds}</span>` + ' second';
// console.log('the counter is working');
}else{
    alert('TIME IS OUT ')
}
setTimeout(got_the_time,1000)
}
got_the_time();

$('textarea').on("input", function(){
    let maxlength = $(this).attr("maxlength");
    let currentLength = $(this).val().length;

    if( currentLength >= maxlength ){
        $('#trial').html( 'Reached the top level no')

    }else{
       $('#trial').html( maxlength - currentLength)
    }
});

// the open/close of the side nav
  openbtn.addEventListener('click',function(){
      closebtn.style.width = "200px";
  })
  
closebtn.addEventListener('click',function(){
    closebtn.style.width = "0";
})



