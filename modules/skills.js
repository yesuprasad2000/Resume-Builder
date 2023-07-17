 

export default class Skills{
 postcontainer = document.querySelector('#postContainerSkills');
 templatecard = document.querySelector('#templatecard');
    constructor(){
        
        this.readFn();

    }

 readFn(){
    if(this.postcontainer){
        this.postcontainer.innerHTML = '';
        fetch('data/skills.json',{method:'GET'}).then(response =>response.json()).then(response =>{
            response.forEach(item => {
            let skill = this.templatecard.content.cloneNode(true);
            skill.querySelector('h5').innerHTML = item.name;
            skill.querySelector('img').setAttribute('src',item.image)
            this.postcontainer.append(skill)
            });
        })
    }

    }
}


 