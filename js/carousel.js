const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const prevButton =document.querySelector('.left_btn');
const nextButton =document.querySelector('.right_btn');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[2].getBoundingClientRect().width;

//arrange the slides  next to one another
const setSlidePosition = ((slide, index) =>{
    slide.style.left = slideWidth * index + 'px';  
});

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translate(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide'); 
};

const updateDots = (currentDot, targetDot) =>{
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideArrow = (slides, nextButton, prevButton, targetIndex)=>{
    if (targetIndex == 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    else if (targetIndex == slides.length - 1 ){
        nextButton.classList.add('is-hidden');
        prevButton.classList.remove('is-hidden');
    }else{
        nextButton.classList.remove('is-hidden');
        prevButton.classList.remove('is-hidden');
    }

}
// when i click left button
prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot); 

    hideArrow(slides, nextButton, prevButton, prevIndex);
});
// when i click right button
nextButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);

    hideArrow(slides, nextButton, prevButton, nextIndex);
});

//when i click nav indicators
dotsNav.addEventListener('click', e =>{
    const targetDot = e.target.closest('button');

    if(!targetDot) return  ;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot == targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideArrow(slides, nextButton, prevButton, targetIndex);

})

 
$(document).ready(()=>{
    $('.carousel').mouseover(()=>{
        //show
        if($('.left_btn').hasClass('is-hidden')) {
          
         $('.right_btn').show();
        }
        else if($('.right_btn').hasClass('is-hidden')) {
         $('.left_btn').show();
          
        }
        else $('.carousel_button').show();
    })
    $('.carousel').mouseout(()=>{
        //hide
        if($('.left_btn').hasClass('is-hidden')) {
          $('.right_btn').hide();
         }
         else if($('.right_btn').hasClass('is-hidden')) {
          $('.left_btn').hide();
           
         }
         else $('.carousel_button').hide();
    })
})

 