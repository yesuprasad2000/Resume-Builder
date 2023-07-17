




export default class Aboutus{
 postcontainer = document.querySelector('#PostContainerAbout');
 templatecard = document.querySelector('#Templatecard');
    constructor(){
        this.readFn();
    }
    readFn() {

        if(this.postcontainer){
            this.postcontainer.innerHTML = '';
            fetch('data/card.json', { method: "GET" }).then(response => response.json()).then(response => {
                response.forEach(item => {
                    let clone = this.templatecard.content.cloneNode(true);
                    clone.querySelector('p').innerHTML =  item.about;
                    clone.querySelector('span').innerHTML = item.Language;
                    clone.querySelector('#one').innerHTML =  item.Career;
                    clone.querySelector('#h1').innerHTML = item.education;
                    clone.querySelector('#h2').innerHTML = item.college;
                    clone.querySelector('#h3').innerHTML = item.score;
                    clone.querySelector('#h4').innerHTML = item.education1;
                    clone.querySelector('#h5').innerHTML = item.college1;
                    clone.querySelector('#h6').innerHTML = item.score1;
                    clone.querySelector('#h7').innerHTML = item.education2;
                    clone.querySelector('#h8').innerHTML = item.college2;
                    clone.querySelector('#h9').innerHTML = item.score2;
                    clone.querySelector('#h10').innerHTML = item.education3;
                    clone.querySelector('#h11').innerHTML = item.college3;
                    clone.querySelector('#h12').innerHTML = item.score3;
                    this.postcontainer.append(clone)
                });
            })
        }

}


}