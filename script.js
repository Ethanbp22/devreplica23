const header = document.querySelector('.header');
const menu_Icon = document.querySelector('.menu-icon');
const number = document.querySelector('.number');
const sidebar = document.querySelector('sidebar')

header.addEventListener('mouseenter', () => {
  header.style.backgroundColor = 'black'; 
  menu_Icon.style.color = 'white';
  number.style.color = 'white';
});

header.addEventListener('mouseleave', () => {
  header.style.backgroundColor = 'white';
  menu_Icon.style.color ='black';
  number.style.color = 'black';
});
sidebar.addEventListener('mouseenter', ()=> {
  header.style.backgroundColor = 'white';
})

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex'

}

function hideSidebar(){
 const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none'
}
const select = document.querySelector('.select');
const dropDown = document.querySelector('.drop-down');

select.addEventListener('click', function() {
  dropDown.classList.toggle('open');
});

let sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
  let id = section.id;
  navLinks[index].href = `#${id}`;
});


