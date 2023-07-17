
import GetPage from "./modules/getpage.js";
import Sidebar from "./modules/sidebar.js";
 class Index{
    sidebar  = new Sidebar();
    constructor(){
        document.querySelector("#menu-item").addEventListener("click",()=>{
            this.sidebar.open()
        });
    }
}
new Index();
new GetPage();





