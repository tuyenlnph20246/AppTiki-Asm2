import data from '../db.json' assert {type: 'json'}
console.log(data)
const listBookElement = document.querySelector('#list-book')

let _content = ""
data.forEach(function(book) {
    _content = _content + /*html*/`
    <a href="./detail/index.html?id=${book.id}">
    <div>
        <img src='${book.images[0].base_url}' alt="Image" class="h-[200px] w-auto">
        <img src="./images/Tiki now.png" alt="" class="mt-2">
        <p class="mt-2">${book.name}</p>
        
        <div class="mt-2 flex flex-row items-center w-[246px] h-[29px]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span class="mt-2 text-[14px] h-[29px] ml-2 text-[#787878]">${book.quantity_sold?.text}</span>
        </div>
        <p class="mt-2">${book.current_seller.price}</p>    
    </div>
    </a>
    `
})

listBookElement.innerHTML = _content;

var imageSlide = document.getElementById('imageSlide');
var img = [
    "slideshow.png",
    "slideshow(2).jpg",
    "slideshow(3).jpg"
];
var dir_img = "images/";
var len = img.length;
// console.log(len)
var index = 0;
var t = null;
var flag = 0;
function PlaySlide(){
    if(flag == 0){
        t = setInterval(function(){
            if(index == len -1){
                index = 0;
                imageSlide.src = dir_img + img[index]
            }else{
                index++;
                imageSlide.src = dir_img + img[index]
            }
        },2000)
        flag = 1;
    }
}
PlaySlide();

var slideReposive = document.getElementById('slideReposive');
// console.log('imgRebosive');
var imgRebosive = [
    'slidereposive-1.webp',
    'slidereposive-2.webp',
    'slidereposive-3.webp'
];
var dir_reposive = "images/";
var len_reposive = imgRebosive.length;
var index_reposive = 0;
var t_reposive = null;
var flag_reposive = 0;
function PlaySlideReposive (){
    if(flag_reposive == 0){
        t_reposive = setInterval(function(){
            if(index_reposive == len_reposive - 1){
                index_reposive = 0;
                slideReposive.src = dir_reposive + imgRebosive[index_reposive];
            }
            else{
                index_reposive ++;
                slideReposive.src = dir_reposive + imgRebosive[index_reposive];
            }
        },2000)
        flag_reposive = 1
    }
}
PlaySlideReposive();