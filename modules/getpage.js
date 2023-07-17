
import Aboutus from "./about.js";
import Skills from "./skills.js";
import Accomplishment from "./accomplishment.js";
import Contact from "./contact.js";
export default class GetPage{

 anchor = document.querySelectorAll('.menu a')
 container = document.querySelector('.section');
 
    constructor(){

        this.anchor.forEach(item=>{
            item.addEventListener('click',(e)=>{
                e.preventDefault();
                let page = e.target.getAttribute('href');
                this.getPage(page);
            })
        });
        this.getPage("views/home.html");

    }

      getPage(page){
        this.container.innerHTML = "";
        let htp =  new XMLHttpRequest()
        htp.open('GET',page,true)
        htp.send()
        htp.onload = (e)=>{
           this.container.innerHTML = htp.response;
           new Aboutus();
           new Skills();
           new Accomplishment();
           new Contact();
           
        }
    }
    
}






