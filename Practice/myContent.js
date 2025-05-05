const mainImage = document.querySelector('.main_image')
const title = document.querySelector('.title')
const excerpt = document.querySelector('.excerpt')
const authorImage = document.querySelector('.author_image')
const name = document.querySelector('.name')
const date = document.querySelector('.date')

let animatedBg = document.querySelectorAll('.animated_bg')
let animatedText = document.querySelectorAll('.animated_text')

setTimeout(getData, 2500)

function getData () {
    mainImage.innerHTML = 
          '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    authorImage.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    name.innerHTML = 'John Doe'
    date.innerHTML = '2nd Oct 2023'

    animatedBg.forEach((bg) => bg.classList.remove('animated_bg'))
    animatedText.forEach((bg) => bg.classList.remove('animated_text'))
}