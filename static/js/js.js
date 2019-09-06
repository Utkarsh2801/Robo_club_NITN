let AllEvents = function(){
    this.ham = document.querySelector('.ham');
    this.inputHam = document.querySelector('.input-ham');
    this.nav = document.querySelector('nav');
    this.ul = document.querySelector('ul');
    this.header = document.querySelector('header');
    this.body = document.querySelector('body');
    this.html = document.querySelector('html');
    this.event_button = document.querySelectorAll('.event button');
    this.model_back = document.querySelectorAll('.event-model-back');
    
    // BODY SMOOTH DISPLAY
    
    this.wind_load = function(){
        self = this;
        window.onload = function(){
            self.body.classList.add('body-display');
        }
    }    
    
    // MOBILE VIEW MENU
    
    this.mobMenu = function(){
        self = this;
        this.ham.onclick = function(e){
            if( window.innerWidth <= 900){
                if(self.ham.classList.contains('active')){
                    self.ham.classList.remove('active');
                    self.nav.style.width = 0 + 'px';
                    self.ham.firstElementChild.classList.remove('active-menu');
                    self.body.classList.remove('pos_fixed');
                    self.html.classList.remove('no-scroll');
                }
                else{
                    self.ham.classList.add('active');
                    self.nav.style.width = 100 + 'vw';
                    self.ham.firstElementChild.classList.add('active-menu');
                    self.body.classList.add('pos_fixed');
                    self.html.classList.add('no-scroll');
                }
            }
            
        }
    }
    
    // SET NAVIGATION WIDTH ON BIG SCREENS
    this.navWidth = function(){
        flag = false;
        setInterval(()=>{
            if( window.innerWidth > 900){
                this.nav.style.width = 100 + '%';
            }
            else{
                if(flag == false){
                    this.nav.style.width = 0 + 'px';
                    flag=true;
                }
            }
        }, 200)
    }
    
    // NAVIGATION COLOR ON SCROLL
    this.headerColor = function(){
    
        if(window.scrollY > 100){
                this.header.classList.add('w-back');
        }
        else{
                this.header.classList.remove('w-back');
        }
    }
    
    
    // TEAM PAGE MOBILE VIEW ICONS
    this.iconRemove = function(){
        document.querySelectorAll('.icon2').forEach(element => {
            element.classList.remove('icon2');
        })
    
        document.querySelectorAll('.icon3').forEach(element => {
            element.classList.remove('icon3');
        })
    
        document.querySelectorAll('.icon4').forEach(element => {
            element.classList.remove('icon4');
        })
    
        document.querySelectorAll('.icon1 > span').forEach(element => {
            element.classList.remove('m-icon-rotate');
        })
    }

    this.mobTeamIcons = function(){
        team_icons = document.querySelectorAll('.icon1');
        team_icons.forEach(element => {
            self = this;
            element.onclick = function(e){
                if (e.target.parentElement.parentElement.classList.contains('icon1')){
                    if(!e.target.parentElement.parentElement.nextElementSibling.classList.contains('icon2')){
                        self.iconRemove();
                    }
                    e.target.parentElement.parentElement.nextElementSibling.classList.toggle('icon2');
                    e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.toggle('icon3');
                    e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('icon4');
                    e.target.parentElement.classList.toggle('m-icon-rotate');
                }
                else if (e.target.parentElement.classList.contains('icon1')){
                    if(!e.target.parentElement.nextElementSibling.classList.contains('icon2')){
                        self.iconRemove();
                    }
                    e.target.parentElement.nextElementSibling.classList.toggle('icon2');
                    e.target.parentElement.nextElementSibling.nextElementSibling.classList.toggle('icon3');
                    e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('icon4');
                    e.target.classList.toggle('m-icon-rotate');
                }
                else if(e.target.classList.contains('icon1')){
                    if(!e.target.nextElementSibling.classList.contains('icon2')){
                        self.iconRemove();
                    }
                    e.target.nextElementSibling.classList.toggle('icon2');
                    e.target.nextElementSibling.nextElementSibling.classList.toggle('icon3');
                    e.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('icon4');
                    e.target.firstElementChild.classList.toggle('m-icon-rotate');
                }
            }
        });
    }
    
    this.scrollEvents = function(){
        self = this;
        window.onscroll = function(){
            let para = document.querySelectorAll('.parallax-scroll');
            para.forEach(image => {
                offset = window.pageYOffset;
                imageOffset = image.offsetTop;
                if(offset > imageOffset - window.innerHeight){
                    image.style.backgroundPositionY = (offset - imageOffset) * 0.2 + 'px';
                }
            })
            self.headerColor();
        }
    }

// Event Model //

    this.event_model_fun = function(){
        self = this;
        this.event_button.forEach((element) =>{
            element.onclick = function(e){
                self.body.classList.add('pos_fixed');
                self.html.classList.add('no-scroll');
                e.target.parentElement.nextElementSibling.classList.add('display');
                e.target.parentElement.nextElementSibling.firstElementChild.classList.add('model-transition');
            }
        })
    }

    this.model_remove = function(){
        this.model_back.forEach((element)=>{
            self = this;
            element.onclick = function(e){
                if(e.target.classList.contains('event-model-back')){
                    e.target.classList.remove('display');
                    e.target.firstElementChild.classList.remove('model-transition');
                    self.body.classList.remove('pos_fixed');
                    self.html.classList.remove('no-scroll');
                }
            }
        })

        document.querySelectorAll('.close').forEach((element) =>{
            self = this;
            element.onclick = function(e){
                e.target.parentElement.parentElement.parentElement.classList.remove('display');
                e.target.parentElement.parentElement.classList.remove('model-transition');
                self.body.classList.remove('pos_fixed');
                self.html.classList.remove('no-scroll');
        }
    })
}
    
    this.init = function(){
        this.wind_load();
        this.mobMenu();
        this.navWidth();
        this.mobTeamIcons();
        this.scrollEvents();
        this.event_model_fun();
        this.model_remove();
    }

}

// author : Utkarsh Tripathi (NIT NAGALAND)

let allEventsVar = new AllEvents();
allEventsVar.init();
  
  
 
  
