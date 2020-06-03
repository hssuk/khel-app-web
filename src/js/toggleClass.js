export default function toggleClass() {
  const elementCard = document.querySelectorAll('.card__khel-name');

  for(let i=0; i < elementCard.length; i++) {
    elementCard[i].addEventListener('click', function(e) {
      console.log(e.target)
      e.target.parentElement.classList.toggle("more-info");
    });
  }
}
