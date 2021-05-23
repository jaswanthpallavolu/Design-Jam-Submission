$(document).ready(()=>{
    var source = $("#image-template").html();
    var template = Handlebars.compile(source);
    var data1 = { images :[
        {
            title:"Life Without Limits",
            src:"../Assets/LWL.jpg",
            about:"Inspiration for a Ridiculously Good Life"
        },
        {
            title:"Unstoppable",
            src:"https://i.pinimg.com/236x/f1/27/11/f127118951561461bb6a0eda7cf24751.jpg",
            about:"The Incredible Power of Faith in Action"
        } ,
        {
            title:"31 Days to a Hope Inspired Life",
            src:"../Assets/hope.jpg",
            about:" About"
        },
        
        {
            title:"Limitless",
            src:"https://i.pinimg.com/236x/84/ad/b4/84adb49f4a57a8fcb5b8a4065b52a188.jpg",
            about:"Devotions for a Ridiculously Good Life"
        } ]}
    var data2 =   {images :[
        {
            title:"Attitude is Everything",
            src:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1392911005l/20876623.jpg",
            about:"The Story of an Extraordinary Life Nick Vujicic"
        },
        {
            title:"Stand Strong",
            src:"../Assets/SS.jpg",
            about:"You Can Overcome Bullying (and Other Stuff That Keeps You Down)"
        },
        {
            title:"The Power of Unstoppable Faith",
            src:"../Assets/Nbook1.jpg",
            about:"Your Keys to a Fulfilled Life"
        },
        {
            title:"Love Without Limits",
            src:"https://i.pinimg.com/236x/5e/90/6b/5e906b45d08cd815939bec09137ec945.jpg",
            about:"A Remarkable Story of True Love Conquering All"
        } 
        
        ]}
    var data3 =  {images :[
            {
                title:"Be the Hands and Feet",
                src:"https://i.pinimg.com/236x/00/d8/fb/00d8fbbb159481bc0227c9a1d75ae86b.jpg",
                about:"Living Out God's Love for All His Children"
            } 
        ]}
    $(".t1").html(template(data1));
    $(".t2").html(template(data2));
    $(".t3").html(template(data3));
});