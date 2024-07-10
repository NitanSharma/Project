const span = document.querySelector("span")
const container = document.getElementById('container')

container.style.display='none'

let load =0
let l = setInterval(loading,30)

function loading(){
    load++
    if(load > 99){
        clearInterval(l)
        setInterval(() => {
            container.style.display = 'inherit'
        }, 1000);
        
    }
    span.innerText = `${load}%`
    setTimeout(() =>{
        span.style.display = 'none'
    },3600)
}


