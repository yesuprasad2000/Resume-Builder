export default class Sidebar{
     sidebar = document.querySelector('.sidebar');
    constructor(){ }
  open() {
    if (this.sidebar.classList.contains('open')) {
        this.sidebar.classList.remove('open')
    } else {
        this.sidebar.classList.add('open')
    }
}
}