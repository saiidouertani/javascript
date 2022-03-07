//window.localStorage.clear()

let input = document.querySelector('input')
let button = document.querySelector('.add')
button.style = 'cursor:clickable'
let list = document.querySelector('.listelement')
let tabobj = []
let table = []
console.log(window.localStorage.getItem('task'))
if (window.localStorage.getItem('task') != null) {
  table = JSON.parse(window.localStorage.getItem('task'))
  table.forEach((element) => {
    list.appendChild(createelementt(element.title, element.id))
  })
}
button.onclick = function () {
  if (input.value != '') {
    let elementtoadd = createelement(input.value)
    list.appendChild(elementtoadd)
    input.value = ''
  }
}
list.addEventListener('click', function (e) {
  let target = e.target
  let supptable = JSON.parse(window.localStorage.getItem('task'))

  let filter = supptable.filter((e) => e.id != target.parentElement.id)
  window.localStorage.setItem('task', JSON.stringify(filter))
  console.log(filter)

  list.removeChild(target.parentElement)
})

function createelement(text) {
  let element = document.createElement('div')
  element.style =
    'display:flex; justify-content:space-between;width:400px;background-color:white;align-items:center;border-radius:10px;padding-right:10px;margin-top:10px'
  let para = document.createElement('p')
  para.textContent = text
  let del = document.createElement('span')
  del.textContent = 'Delete'
  del.style =
    'background-color:red; color white;height:fit-content;padding:5px 10px;border-radius:10px'
  element.appendChild(para)
  element.appendChild(del)
  let obj = {
    id: Math.random(),
    title: text,
  }

  tabobj.push(obj)
  console.log(tabobj)
  window.localStorage.setItem('task', JSON.stringify(tabobj))
  element.id = obj.id
  return element
}

function createelementt(text, idd) {
  let element = document.createElement('div')
  element.style =
    'display:flex; justify-content:space-between;width:400px;background-color:white;align-items:center;border-radius:10px;padding-right:10px;margin-top:10px'
  let para = document.createElement('p')
  para.textContent = text
  let del = document.createElement('span')
  del.textContent = 'Delete'
  del.style =
    'background-color:red; color white;height:fit-content;padding:5px 10px;border-radius:10px'
  element.appendChild(para)
  element.appendChild(del)
  let obj = {
    id: idd,
    title: text,
  }

  tabobj.push(obj)

  element.id = obj.id
  return element
}
