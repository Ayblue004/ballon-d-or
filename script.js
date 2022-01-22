document.addEventListener('DOMContentLoaded', ()=>{
    var yearSearch = document.getElementById("yearSearch");
var search = document.getElementById("search");
yearSearch.value="";
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function yearKey(event){
  if(event.keyCode === 13){
    year();
  }
}
function year(){
  let searchValue = yearSearch.value;
  switch(searchValue){
    case '1956': showSlides(slideIndex =1);
    break;
    case '1957': showSlides(slideIndex =2);
    break;
    case '1958': showSlides(slideIndex =3);
    break;
    case '1959': showSlides(slideIndex =4);
    break;
    case '1960': showSlides(slideIndex =5);
    break;
    case '1961': showSlides(slideIndex =6);
    break;
    case '1962': showSlides(slideIndex =7);
    break;
    case '1963': showSlides(slideIndex =8);
    break;
    case '1964': showSlides(slideIndex =9);
    break;
    case '1965': showSlides(slideIndex =10);
    break;
    case '1966': showSlides(slideIndex =11);
    break;
    case '1967': showSlides(slideIndex =12);
    break;
    case '1968': showSlides(slideIndex =13);
    break;
    case '1969': showSlides(slideIndex =14);
    break;
    case '1970': showSlides(slideIndex =15);
    break;
    case '1971': showSlides(slideIndex =16);
    break;
    case '1972': showSlides(slideIndex =17);
    break;
    case '1973': showSlides(slideIndex =18);
    break;
    case '1974': showSlides(slideIndex =19);
    break;
    case '1975': showSlides(slideIndex =20);
    break;
    case '1976': showSlides(slideIndex =21);
    break;
    case '1977': showSlides(slideIndex =22);
    break;
    case '1978': showSlides(slideIndex =23);
    break;
    case '1979': showSlides(slideIndex =24);
    break;
    case '1980': showSlides(slideIndex =25);
    break;
    case '1981': showSlides(slideIndex =26);
    break;
    case '1982': showSlides(slideIndex =27);
    break;
    case '1983': showSlides(slideIndex =28);
    break;
    case '1984': showSlides(slideIndex =29);
    break;
    case '1985': showSlides(slideIndex =30);
    break;
    case '1986': showSlides(slideIndex =31);
    break;
    case '1987': showSlides(slideIndex =32);
    break;
    case '1988': showSlides(slideIndex =33);
    break;
    case '1989': showSlides(slideIndex =34);
    break;
    case '1990': showSlides(slideIndex =35);
    break;
    case '1991': showSlides(slideIndex =36);
    break;
    case '1992': showSlides(slideIndex =37);
    break;
    case '1993': showSlides(slideIndex =38);
    break;
    case '1994': showSlides(slideIndex =39);
    break;
    case '1995': showSlides(slideIndex =40);
    break;
    case '1996': showSlides(slideIndex =41);
    break;
    case '1997': showSlides(slideIndex =42);
    break;
    case '1998': showSlides(slideIndex =43);
    break;
    case '1999': showSlides(slideIndex =44);
    break;
    case '2000': showSlides(slideIndex =45);
    break;
    case '2001': showSlides(slideIndex =46);
    break;
    case '2002': showSlides(slideIndex =47);
    break;
    case '2003': showSlides(slideIndex =48);
    break;
    case '2004': showSlides(slideIndex =49);
    break;
    case '2005': showSlides(slideIndex =50);
    break;
    case '2006': showSlides(slideIndex =51);
    break;
    case '2007': showSlides(slideIndex =52);
    break;
    case '2008': showSlides(slideIndex =53);
    break;
    case '2009': showSlides(slideIndex =54);
    break;
    case '2010': showSlides(slideIndex =55);
    break;
    case '2011': showSlides(slideIndex =56);
    break;
    case '2012': showSlides(slideIndex =57);
    break;
    case '2013': showSlides(slideIndex =58);
    break;
    case '2014': showSlides(slideIndex =59);
    break;
    case '2015': showSlides(slideIndex =60);
    break;
    case '2016': showSlides(slideIndex =61);
    break;
    case '2017': showSlides(slideIndex =62);
    break;
    case '2018': showSlides(slideIndex =63);
    break;
    case '2019': showSlides(slideIndex =64);
    break;
    case '2020': showSlides(slideIndex =65);
    break;
    case '2021': showSlides(slideIndex =66);
    break;
    default:;
  }
  yearSearch.value="";
}
year(yearSearch.value);
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlides2(n) {
  showSlides(slideIndex += n);
}

function currentSlide2(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }
    function infoOut(x,y){
  var info = document.getElementsByClassName("info");
    info[x].classList.toggle("info2");
    var moreInfo = document.getElementsByClassName("moreInfo");
   if(moreInfo[y].innerText == "More info"){
    moreInfo[y].innerText = "Hide info "
  }
  else{
    moreInfo[y].innerText = "More info"
  }
}
    search.addEventListener("click", year);
    yearSearch.addEventListener("keypress", yearKey);

})