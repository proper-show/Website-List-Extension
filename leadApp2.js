let leadsArr = []
const localLeadsArr = JSON.parse(localStorage.getItem('localLeadsArr'))
const inputBox = document.getElementById('input-el')
const addButton = document.getElementById('input-btn')
const saveTabButton = document.getElementById('tab-btn')
const deleteAllButton = document.getElementById('delete-btn')
const listBox = document.getElementById('ul-el')

if (localLeadsArr) {
    leadsArr = localLeadsArr
    renderList(leadsArr) 
}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function renderList(leads) {
    
    const listEl = document.createElement('li')
    const textSpan = document.createElement('span')
    const idSpan = document.createElement('span')
    const deleteButton = document.createElement('button')
    
    for (let i = 0; i < leads.length; i++) {
        
        textSpan.textContent = leads[i]  
        idSpan.textContent = leads[i]
        deleteButton.textContent = 'X'
    
        idSpan.setAttribute('id', 'id-span')
        deleteButton.setAttribute('id', 'delete-item')

        listEl.appendChild(textSpan)
        listEl.appendChild(idSpan)
        listEl.appendChild(deleteButton)
        listBox.appendChild(listEl)

    }

  
    

    deleteButton.addEventListener('click', () => {
        listBox.removeChild(listEl)

        if (textSpan.textContent === idSpan.textContent) {
            leadsArr.splice(leadsArr.indexOf(textSpan.textContent), 1)
          
        }

        localStorage.setItem('localLeadsArr', JSON.stringify(leadsArr))
        console.log(leadsArr)

    })

    deleteAllButton.addEventListener('click', () => {
        localStorage.clear()
        leadsArr = []
        renderList(leadsArr)
        removeAllChildNodes(listBox)
    })
    
    
}

addButton.addEventListener('click', () => {
    leadsArr.push(inputBox.value)
    renderList(leadsArr)
    
    localStorage.setItem('localLeadsArr', JSON.stringify(leadsArr))
    inputBox.value = ''
    console.log(leadsArr)
})

