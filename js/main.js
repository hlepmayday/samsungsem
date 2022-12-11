// main.js
window.addEventListener('load',()=>{

    const gnb = document.querySelectorAll(".gnb>ul>li");
    
    const gnb_inner = document.querySelector(".header_wrap");
    
    
    for(let i=0;i<gnb.length;i++){
        gnb[i].addEventListener("mouseover",(e)=>{
            e.currentTarget.classList.add("on");
            var ht = e.currentTarget.children[1].offsetHeight;
            gnb_inner.style.height = 70 + ht + 'px';
        })
        gnb[i].addEventListener("mouseout",(e)=>{
            e.currentTarget.classList.remove("on");
            gnb_inner.style.height = '70px';
        })
        gnb[i].addEventListener("focus",(e)=>{
            e.currentTarget.parentElement.classList.add("on");
            var ht = e.currentTarget.nexteElementSibling.offsetHeight;
            gnb_inner.style.height = 70 + ht + 'px';
        })
        gnb[i].addEventListener("blur",(e=>{
            e.currentTarget.parentElement.classList.remove("on");
            gnb_inner.style.height = '70px';
        }))
    }


    //검색 박스
    const btn_srch = document.querySelector(".btn_srch");
    const srch_box = document.querySelector(".srch_wrap");
    const btn_srch_close = document.querySelector(".btn_srch_close")

    btn_srch.addEventListener("click",(e)=>{
        e.preventDefault();
        srch_box.classList.add("on");
    })
    btn_srch_close.addEventListener("click",(e)=>{
        e.preventDefault();
        srch_box.classList.remove("on");
    })

})

//스크롤
const newsroom = document.querySelector("#newsroom");
const newsletter = document.querySelector("#newsletter");
const content2 = document.querySelector("#content2");
const list1 = document.querySelector("#list1");
const list2 = document.querySelector("#list2");
const list3 = document.querySelector("#list3");
 

window.addEventListener("scroll",(e)=>{
  let scroll = document.querySelector("html").scrollTop;
  // console.log(window.scrollX, window.scrollY);
  console.log(scroll);
  if(scroll > 300){
    newsroom.classList.add("on");
  
  } if(scroll > 800){
    newsletter.classList.add("on");

  } if(scroll > 1300){
    content2.classList.add("on");
   
  } if(scroll > 1930 ){
    list1.classList.add("on");
    
  }  if(scroll > 2350){
    list2.classList.add("on");
    
  } if(scroll > 2750){
    list3.classList.add("on");
  
}
});


