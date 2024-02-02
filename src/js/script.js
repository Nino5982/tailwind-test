// function burger() {
//     const burgerMenu = document.querySelector('#burger-menu');
//     const navigation = document.querySelector('#navigation');
//     const logInButton = document.querySelector('#actions');

//     burgerMenu.addEventListener('click', ()=> {
//         burgerMenu.classList.toggle('active');
//         navigation.classList.toggle('burger-active')
//         logInButton.classList.toggle('actions-active')
//     })
// }
// burger();

// const btnElement = document.querySelectorAll('.btn-element');

// function clickfunc(){
// alert('hello');
// }

// btnElement.forEach((item) => {
//     item.addEventListener('click',clickfunc)
// } )

// $('.your-class').slick({
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//   });



//   const quoteContainer = document.getElementById('quote-container');
// const quote = document.getElementById('quote');
// const author = document.getElementById('author');
// const newQuoteBtn = document.getElementById('new-quote');
// const tweetBtn = document.getElementById('twitter-btn');
// const loader = document.getElementById('loader');

// let apiQuotes = [];



// function getRandomQuote(){
//     const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//     // check if author field is blanck and replace it with unknown
    
//     // author.innerText = randomQuote.author
//     // check quote length to determine styling

//     quote.textContent= randomQuote.text;
// };

// async function getQuotesFromApi(){
//     const apiUrl = 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes= await response.json();
//         console.log(apiQuotes);
//     } catch (error) {
//     //    catch error here 
//     }
// }

// // newQuoteBtn.addEventListener('click' , getRandomQuote);
// getQuotesFromApi();


// $('.carousel').carousel({
//     interval: 2000,
//     infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//   })

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");

 
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     // slides[i].style.display = "none";
//     let hiddenElement = slides[i];
//     hiddenElement.classList.add('hidden')
//   }
  
// //   slides[slideIndex-1].style.display = "block";
//  let showpic = slides[slideIndex-1]
//  showpic.classList.add('block')
//  showpic.classList.remove('hidden')
// }


// swiper

  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  const cardContainer = document.getElementById("card-container");
  const loadMoreButton = document.getElementById("load-more");
  const cardCountElem = document.getElementById("card-count");
  const cardTotalElem = document.getElementById("card-total");
  
  const cardLimit = 99;
  const cardIncrease = 9;
  const pageCount = Math.ceil(cardLimit / cardIncrease);
  let currentPage = 1;
  
  cardTotalElem.innerHTML = cardLimit;
  
  const getRandomColor = () => {
    const h = Math.floor(Math.random() * 360);
  
    return `hsl(${h}deg, 90%, 85%)`;
  };
  
  const handleButtonStatus = () => {
    if (pageCount === currentPage) {
      loadMoreButton.classList.add("disabled");
      loadMoreButton.setAttribute("disabled", true);
    }
  };
  
  const createCard = (index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = index;
    card.style.backgroundColor = getRandomColor();
    cardContainer.appendChild(card);
  };
  
  const addCards = (pageIndex) => {
    currentPage = pageIndex;
  
    handleButtonStatus();
  
    const startRange = (pageIndex - 1) * cardIncrease;
    const endRange =
      pageIndex * cardIncrease > cardLimit ? cardLimit : pageIndex * cardIncrease;
    
    cardCountElem.innerHTML = endRange;
  
    for (let i = startRange + 1; i <= endRange; i++) {
      createCard(i);
    }
  };
  
  window.onload = function () {
    addCards(currentPage);
    loadMoreButton.style.backgroundColor = getRandomColor();
    loadMoreButton.addEventListener("click", () => {
      addCards(currentPage + 1);
    });
  };
  