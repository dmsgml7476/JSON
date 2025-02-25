const form = document.querySelector("form")
const input = document.querySelector("input")

const body = document.querySelector("body")
const p = document.createElement("p")
const ul = document.createElement("ul")
p.innerText = "Loading..."

body.append(p, ul)

let todos = []
const renderTodo = () => {
  ul.innerHTML = null
  todos.forEach((todo) => {
    const li = document.createElement("li")
    li.innerText = todo
    ul.appendChild(li)
  })
}

//! Todo: init함수 비동기 함수로 만들기
const init = () => {
  p.innerText = "Loading..."
  const url = "http://localhost:5500/todos.json"

  // Todo: 위의 url 사용하여 fetch 함수 호출하고 return 값 res에 저장하기

  // Todo: json 함수 사용해서 data 에 저장하기

  // Todo: todos 를 data로 바꾸기
  //? Tip: let items = []
  //?      const newItems = ['a', 'b']
  //?      items = newItems

  p.innerText = null
  renderTodo()
}

init()

//! 추가 로직구현하기
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const value = input.value

  //Todo: 아무것도 입력안했을 때 예외처리하기

  //Todo: 뭔가 입력했다면 todos 에 추가하기
  //? Tip: push/unshift함수 사용하면 쉬움

  //! renderTodos함수 호출하기

  //
})
