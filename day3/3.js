let oBtn=document.getElementById('btn')
let container=document.getElementsByClassName('box')[0]
console.log(container);
oBtn.addEventListener('click',()=>{
    createbox()
})
function createbox(){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            let boxs=document.createElement('div')
            container.appendChild(boxs)
        }
    }
}