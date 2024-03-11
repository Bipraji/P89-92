function login(){
    pn = [document.getElementById('n1').value,document.getElementById('n2').value];
    console.log(pn);

    localStorage.setItem('name1', pn[0]);
    localStorage.setItem('name2', pn[1]);

    window.location = "index2.html";
}