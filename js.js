// create a tooltip
class Tooltip {
 constructor(element){
  this.element = element;
  this.message = element.getAttribute('data-message');

 }
 init(){
  const tip = document.createElement('div');
  tip.classList.add('tip');
  tip.textContent  = this.message;
  this.element.appendChild(tip);
  this.element.addEventListener('mouseenter', () =>{
   tip.classList.add('active');
  });

  this.element.addEventListener('mouseleave', () =>{
   tip.classList.remove('active');
  });
 }
}

class Dropdown{
  constructor(container){
   this.container = container;
   this.trigger = container.querySelector('.trigger');
   this.content = container.querySelector('.content');

  }
  init(){
   this.trigger.addEventListener('click', () => {
     this.trigger.classList.toggle('active');
     this.content.classList.toggle('active');
   });
  }
}
// tabs 
class Tabs {
 constructor(container){
  this.container = container;
  this.tabs = container.querySelectorAll('.trig');

 }
 init(){
  this.tabs.forEach(element => {
   element.addEventListener('click', e =>{
    this.toggleTabs(e);
    this.toggleContent(e);
   });
  });
 }
 toggleTabs(e){
  // remove current active classes
  this.tabs.forEach(element => element.classList.remove('active'));
  // add rnew active class to clicked tab
  e.target.classList.add('active');
 }
 toggleContent(e){
  // reomve curren active classes from content
   this.container.querySelectorAll('.content').forEach(item =>{
    item.classList.remove('active');
    // add new active class to content
  const selector = e.target.getAttribute('data-target');
  const content = this.container.querySelector(selector);
  content.classList.add('active');
   });

  
 }
}

// snackbar 
class Snackbar{
 constructor(){
  this.snackbar = document.createElement('div');
 }
 init(){
  this.snackbar.classList.add('snackbar');
  document.querySelector('body').appendChild(this.snackbar);
 }
 show(message){
  this.snackbar.textContent = message;
  this.snackbar.classList.add('active');
  setTimeout(() =>{
   this.snackbar.classList.remove('active');
  }, 4000)
 }
}


// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', e =>{
 snackbar.show('you click me :)');
});

// creat a tooltip
const tooltips = new Tooltip(document.querySelector('.tooltip'));
tooltips.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(element => {
 console.log(element);
  const instance = new Dropdown(element).init();
});

// create tabs 
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();