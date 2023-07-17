 
export default class Accomplishment{
     postcontainer = document.querySelector('#postContainerAccomplishment');
 templatecard = document.querySelector('#templatecard')
    constructor(){
        this.readFn()
    }

      readFn() {
        if(this.postcontainer){
            this.postcontainer.innerHTML = "";
            fetch('data/accomplishment.json', { method: 'GET' }).then(response => response.json())
                .then(response => {
                    response.forEach(item => {
                        let accomplishment = this.templatecard.content.cloneNode(true);
                        accomplishment.querySelector('h5').innerHTML = item.name;
                        accomplishment.querySelector('a').setAttribute('href',item.url)
                        accomplishment.querySelector('h6').innerHTML = item.duration;
                        accomplishment.querySelector('span').innerHTML = item.upload;
                        this.postcontainer.append(accomplishment)
                    });
                })
        }
    
    }
}