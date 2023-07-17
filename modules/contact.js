

export default class Contact {
    postcontainers = document.querySelector('#postContainerContact');
    templatecards = document.querySelector('#templatecards');
    constructor() {
        this.readfn();
    }


    readfn() {
        if (this.postcontainers) {
            this.postcontainers.innerHTML = '';
            fetch(`data/contcats.json`).then(response => response.json()).then(response => {
                response.forEach(item => {
                    let clone = this.templatecards.content.cloneNode(true);
                    clone.querySelector('h4').innerHTML = item.name;
                    clone.querySelector('h5').innerHTML = item.mobile;
                    this.postcontainers.appendChild(clone)
                });
            })
        }
    }
}


