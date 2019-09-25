import api from './api'
import { createCipher } from 'crypto'

class App {
    constructor(){
        this.repositories = []
        this.formEl = document.querySelector('#form-repos')
        this.listEl = document.querySelector('#list-repos')
        this.inputRepo = document.querySelector('input[name=repos]')
        this.registerHandlers()
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    setLoading(loading = true){
        if(loading){
            let loadingEl = document.createElement('span')
            loadingEl.setAttribute('id', 'loading')
            loadingEl.appendChild(document.createTextNode('Loading'))
            this.formEl.appendChild(loadingEl)
        } else {
            document.querySelector('#loading').remove()
        }
    }

    async addRepository(event){
        event.preventDefault()

        const inputRepo = this.inputRepo.value

        if(inputRepo.length === 0) return

        this.setLoading()

        try{
            const response = await api.get(`/repos/${inputRepo}`)
            console.log(response)

            const {name, description, owner: {avatar_url, html_url}} = response.data
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            })
        }
        catch(err){
            alert('Erro ao carregar repositório')
        }

        this.setLoading(false)

        this.render()
    }

    render(){
        this.listEl.innerHTML = ''

        this.repositories.forEach(repos => {    
            let listItem = document.createElement('li')

            let imgItem = document.createElement('img')
            imgItem.setAttribute('src', repos.avatar_url)
            listItem.appendChild(imgItem)

            let titleItem = document.createElement('strong')
            titleItem.appendChild(document.createTextNode(repos.name))
            listItem.appendChild(titleItem)

            let descriptionItem = document.createElement('p')
            descriptionItem.appendChild(document.createTextNode(repos.description))
            listItem.appendChild(descriptionItem)

            let linkItem = document.createElement('a')
            linkItem.setAttribute('href', repos.html_url)
            linkItem.setAttribute('target', '_blank')
            linkItem.appendChild(document.createTextNode('Github'))
            listItem.appendChild(linkItem)

            this.listEl.appendChild(listItem)
        })
    }
}

new App()