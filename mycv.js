let  burgerMenu = () => {

  let burgerSlide = document.querySelector('.burger');
  console.log(burgerSlide)
  let menuList =  document.querySelector('.navbar');
  console.log(menuList)

  burgerSlide.addEventListener('click', () => { 
    menuList.classList.toggle('nav-active');
  });
 
  
}
burgerMenu();