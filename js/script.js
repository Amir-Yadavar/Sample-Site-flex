let $ = document
let click1 = $.querySelector('.click1')
let click2 = $.querySelector('.click2')
let click3 = $.querySelector('.click3')
let part1 = $.querySelector('.part1')
let part2 = $.querySelector('.part2')
let part3 = $.querySelector('.part3')

let navSpan = $.querySelector('.nav-bar>span')
let navMobile = $.querySelector('.nav-mobile')


click1.addEventListener('click',()=>{
    part1.style.left = '0'
    part2.style.left = '100%'
    part3.style.left = '-100%'
})

click2.addEventListener('click',()=>{
    part2.style.left = '0'
    part1.style.left = '100%'
    part3.style.left = '-100%'
})

click3.addEventListener('click',()=>{
    part3.style.left = '0'
    part1.style.left = '-100%'
    part2.style.left = '100%'
})

navSpan.addEventListener('click',()=>{
     navstatus = navSpan.getAttribute('data-status') 

     if(navstatus ==='off'){
        navMobile.style.display = 'flex'
        navSpan.setAttribute('data-status','on')
     }
     if(navstatus ==='on'){
        navMobile.style.display = 'none'
        navSpan.setAttribute('data-status','off')
     }

    
})