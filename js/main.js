let switchlis=document.querySelectorAll('.our-work ul li');
let imgs=Array.from(document.querySelectorAll('.row div'));
switchlis.forEach((li)=>{
    li.addEventListener('click',removeactive);
    li.addEventListener('click',manageImgs);

    
})
function removeactive(){
    switchlis.forEach((li)=>{
        li.classList.remove('active')
    })
    this.classList.add('active');
    this.classList.add('rounded-pill')

}
function manageImgs() {
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    console.log(document.querySelectorAll(this.dataset.cat));
    console.log(this.dataset.cat);
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "block";
    });
  }
