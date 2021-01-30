

document.querySelector('.banner-btn').addEventListener('click' , () =>{
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.container').style.background = '#cc683c';
})
document.querySelector('.banner-btn').addEventListener('click' , function(){
    document.querySelector('.banner').style.display = 'flex';
})



let enterBTN = document.getElementById("enterBTN");



let checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("چک باکس فعال شده است..");
  } else {
    console.log("چک باکس فعال نشده است..");
  }
});

