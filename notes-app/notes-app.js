const notes = [{
  title: 'my trip',
  body: 'I would like to go to Japan'
}, {
  title: 'learn',
  body: 'Add JavaScrip to my stack'
}, {
  title: 'School work',
  body: 'Finish my homework'
}]

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
  p.textContent = '***'
})

//Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from javascript'
document.querySelector('body').appendChild(newParagraph)