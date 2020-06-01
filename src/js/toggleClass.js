export default function toggleClass() {
  const elementCard = document.querySelectorAll('.card__khel-name');
console.log(elementCard)
  for(let i=0; i < elementCard.length; i++) {
    elementCard[i].addEventListener('click', function(e) {
      e.target.parentElement.classList.toggle("more-info");
    });
  }
}
