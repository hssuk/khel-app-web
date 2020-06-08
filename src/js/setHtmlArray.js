export default function setHtmlArray(data, arr) {
  arr.push(
    `<div class="card">
      <div class="card__khel-name">
        <span class="title">${data.name}</span>
        <span class="icon-info"></span>
      </div>
      <div class="card__khel-meaning">
        <span class="title">Meaning</span>
        <span class="text">${data.meaning}<span>
      </div>
      <div class="card__khel-aim">
        <span class="title">Aim</span>
        <span class="text">${data.aim}</span>
      </div>
      <div class="card__khel-description">
        <span class="title">Rules</span>
        <span class="text">${data.description}</span>
      </div>
    </div>`
  )

  return arr;
}
