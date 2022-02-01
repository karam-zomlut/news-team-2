let barIcon = document.querySelector('.bar-icon'),
    nav = document.querySelector('.nav-links');

    barIcon.onclick = function(){
        if(nav.classList.contains("show")){
            nav.classList.remove('show');
        }else{
            //nav.style.opacity = '0';
            nav.classList.add('nav-links', 'show');
        }
        
    } 