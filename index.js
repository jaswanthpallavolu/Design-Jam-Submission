const images = document.querySelectorAll('[data-src]');
const quotes = document.querySelectorAll('.quote');
 
const preloadImage = (img)=>{
    const src = img.getAttribute('data-src');
    if (!src) return;
    img.src = src; 
} 
const Options = {
    threshold:0,
    rootMargin: "0px 0px 10px 0px"
}
const loadImageOnScroll = new IntersectionObserver(function(
    entries,
    loadImageOnScroll
){
    entries.forEach( entry =>{
        if(!entry.isIntersecting){
            return ;
        }
        else{
            preloadImage(entry.target);
            entry.target.classList.add('appear');
            loadImageOnScroll.unobserve(entry.target);
        }    
    });
    
},Options)

images.forEach(image =>{
    loadImageOnScroll.observe(image);
})


// for quotes
const quoteOptions = {
    threshold:0,
    rootMargin:"0px 0px -300px 0px"
}
const quotesOnscroll = new IntersectionObserver(function(
    entries,
    quotesOnscroll
){
    entries.forEach(entry =>{
        
        if(!entry.isIntersecting){
            entry.target.classList.remove('appear');
        }
        else{
            entry.target.classList.add('appear');
        }
    })
},quoteOptions);

// console.log(quotes);
quotes.forEach(quote =>{
    quotesOnscroll.observe(quote);
})