const buttons = document.querySelectorAll('.butt-item');
const body =document.querySelector("body");


buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        
        if(e.target.classList.contains('red'))
        {
            body.style.backgroundColor = 'red';
        }
        else if (e.target.classList.contains('blue')) {
            body.style.backgroundColor = 'blue';
        } else if (e.target.classList.contains('green')) {
            body.style.backgroundColor = 'green';
        } else if (e.target.classList.contains('yellow')) {
            body.style.backgroundColor = 'yellow';
        }
        else if (e.target.classList.contains('purple')) {
            body.style.backgroundColor = 'purple';
        }
    })

    body.addEventListener('click',function(e){
        if(e.target == body){
            body.style.backgroundColor = 'white';
        }
    })
})
