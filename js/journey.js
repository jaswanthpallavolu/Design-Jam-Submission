const ul_chapters = document.querySelector('.chapters');
 
 
const SetTargetActive = (TargetLink,Activelink) =>{
    Activelink.classList.remove('selected');
    TargetLink.classList.add('selected');
     
}
const change_content = (content) => {
    var a = document.getElementById('col-r');
    a.innerHTML = content;
    
}    

ul_chapters.addEventListener('click', e=>{
    const TargetLink =  e.target.closest('h3');
    
    if(!TargetLink) return;
    const content = TargetLink.nextElementSibling.innerHTML;  
    // console.log(content)  
    // console.log(TargetLink);
    const Activelink = ul_chapters.querySelector('.selected');
    // console.log(Activelink);
    SetTargetActive(TargetLink,Activelink);
    change_content(content);
})