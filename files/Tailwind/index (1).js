

const firstBtn = function(){
    var btn = document.getElementById("btn");
    
    var button = function() {
    confirm("Do you really Want to do this ???")
    };
    
    btn.addEventListener('click', () =>{
        button();
    });
};

firstBtn();
