const main = document.querySelector('.main_image')
const mainTitle = document.querySelector('.title')
const excerpt = document.querySelector('.excerpt')
const authorImg = document.querySelector('.author_image')
const name = document.querySelector('.name')
const date = document.querySelector('.date')


const animatedText = document.querySelectorAll('.animated_text')
const animatedBg = document.querySelectorAll('.animated_bg')

let obj = {
    mainImg : "https://media.istockphoto.com/id/1222691714/photo/mt-fuji-from-lake-yamanaka.jpg?s=612x612&w=0&k=20&c=hxNZpwwfaeTcDVeTWagd5r0aAFiaKpV3NP4t296HMNY=",
    title : "Lake Yamanaka",
    text1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    author : "https://ew.com/thmb/Td47EZ5kYY2mkuWKzPOMZuPHKW4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blindspot_0-1-1469475ac42647bc817d68c16250b264.jpg",
    name : "Jane Doe",
    date : "25th May 2024"
}

console.log(obj.mainImg);

function replaceContent() {
    main.innerHTML = `<img src = "${obj.mainImg}"/>`
    mainTitle.innerHTML = obj.title
    excerpt.innerHTML = obj.text1
    authorImg.innerHTML = `<img src = "${obj.author}"/>`
    date.innerHTML = obj.date
    name.innerHTML = obj.name

    animatedText.forEach((text) => text.classList.remove('animated_text'))
    animatedBg.forEach((bg) => bg.classList.remove('animated_bg'))

}

setTimeout(replaceContent, 3000)