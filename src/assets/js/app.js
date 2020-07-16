const modal = document.querySelector('.modal')
const previews = document.querySelectorAll('.lesson img')
const fullImage = document.querySelector('.img-description')
const imgText = document.querySelector('.caption ')

previews.forEach( preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open')
    })
});