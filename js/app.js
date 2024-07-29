

// ______________  Cart Modal  ______________ //
const cart = document.getElementById('cart-modal');

// open in cart
document.getElementById('cart-btn').addEventListener('click',()=>{
    cart.classList.add('active')
})

// close cart
document.getElementById('cart-close-btn').addEventListener('click',()=>{
    cart.classList.remove('active')
})



// ______________ Login Modal ______________
const loginModal = document.getElementById('login-modal'),
    openLoginBtn = document.getElementById('login-btn'),
    closeLoginBtn = document.getElementById('login-close-btn');
    
function loginModalF (){
    if(openLoginBtn){
        openLoginBtn.addEventListener('click',function(){
            loginModal.classList.add('active')
        })
    }
    
    if(closeLoginBtn){
        closeLoginBtn.addEventListener('click',function(){
            loginModal.classList.remove('active')
        })
    }
}
loginModalF()

// ______________  Scroll Header  ______________ //
window.addEventListener('scroll',function(){
    const header = document.querySelector('.header')
    if(this.scrollY >= 50 ) {
        header.classList.add('scroll-header')
    }
    else{
        header.classList.remove('scroll-header')
    }
})


// ______________ Scroll Up ______________
function scrollUp () {
    const scrollUp = document.getElementById('scroll-up');
    
    if(this.scrollY >= 200) {
        scrollUp.classList.add('active')
    }
    else{
        scrollUp.classList.remove('active')
    }
}
window.addEventListener('scroll',scrollUp)

// ______________  Menu Button  ______________ //
const menuBtn = document.getElementById('menu-btn')
const nav = document.getElementById('nav')
const icon = document.getElementById('icon')
const closeIcon = "<i class='bx bx-power-off'></i>"
const menuIcon = "<i class='bx bx-menu'></i>"


menuBtn.addEventListener('click',function(){
    
    nav.classList.toggle('active')
    
    if (icon.classList.contains('bx-menu')){
        icon.classList.remove('bx-menu')
        icon.classList.add('bx-power-off')
    }
    else{
        icon.classList.remove('bx-power-off')
        icon.classList.add('bx-menu')
    }
    
})


// ______________  Home Swiper  ______________ //
let swiper = new Swiper(".home-swiper", {
    loop:true,
    spaceBetween:20,
    speed:2000,
    pagination: {
        clickable:'true',
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 4500, 
        disableOnInteraction: false,
    },
  });
  
  
  
// ______________  Arrivals Swiper  ______________ //
let arrivalsSwiper = new Swiper(".arrivals-swiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    speed:1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay:true,
    breakpoints: {
        // 580:{
        //     spaceBetween: 40,
        // }
    }
  });
  

  
//   ____________________ Faq's Page Accoundiant ___________________

// Add click event listener to each question header
// const questionItems = document.querySelectorAll('.questions-item');

// questionItems.forEach(item => {
//     const header = item.querySelector('.question-item-header');
//     header.addEventListener('click', () => {
//         const isActive = item.classList.contains('active');

//         // Collapse all items
//         questionItems.forEach(i => {
//             if (i !== item) {
//                 i.classList.remove('active');
//                 i.querySelector('.question-info').style.height = '0';
//             }
//         });

//         // Toggle current item
//         if (!isActive) {
//             item.classList.add('active');
//             const questionInfo = item.querySelector('.question-info');
//             questionInfo.style.height = `${questionInfo.scrollHeight}px`;
//         } else {
//             item.classList.remove('active');
//             const questionInfo = item.querySelector('.question-info');
//             questionInfo.style.height = '0';
//         }
//     });
// });

const questionItems = document.querySelectorAll('.questions-item');

questionItems.forEach(item =>{
    
    const header = item.querySelector('.question-item-header')
    const headerIcon = header.querySelector('i')
    
    header.addEventListener('click',()=>{
        const isActive = item.classList.contains('active')
        
        // collapse all items 
        questionItems.forEach((eachItem =>{
            if(eachItem !== item){
                eachItem.classList.remove('active')
                eachItem.querySelector('.question-info').style.height = '0'
            }
        }))
        
        // toggle
        if(!isActive){
            item.classList.add('active')
            
            // add minus icon
            headerIcon.classList.remove('bx-plus');
            headerIcon.classList.add('bx-minus');
            const questionInfo = item.querySelector('.question-info')
            questionInfo.style.height = `${questionInfo.scrollHeight}px`
        }
        else{
            item.classList.remove('active')
            // add minus icon
            headerIcon.classList.remove('bx-minus');
            headerIcon.classList.add('bx-plus');
            
            const questionInfo = item.querySelector('.question-info')
            questionInfo.style.height = '0'
        }
    })
})