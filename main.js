// class TodoList {
//     constructor(){
//         this.todos = []
//     }

//     addTodo(){
//         this.todos.push('Novo todo')
//         console.log(this.todos)
//     }
// }


// const novoTodo = new TodoList()

// document.getElementById('btn').onclick = function(){ 
//     novoTodo.addTodo()
// }

// const arr = [1,2,3,4]

// const mapArr = arr.map(function(item, index){
//     return item * 2
// })

// console.log(mapArr)

// const reduceArr = arr.reduce(function(total, next){
//     return total + next
// })

// console.log(reduceArr)

// const filterArr = arr.filter(function(item){
//     return item % 2 === 0
// })

// console.log(filterArr)

// const findArr = arr.find(function(item){
//     return item > 2
// })

// console.log(findArr)

class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha
    }

    isAdmin() {
        return false
    }
}

class Admin extends Usuario {
    constructor(email, senha){
        super(email, senha)
    }

    isAdmin() {
        return true
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) 
console.log(Adm1.isAdmin()) 