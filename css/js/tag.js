const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d811b60',
    nav: '#64dd17',
    main:'#00acc1',
    footer: '#3304ffe',
    form: '#9f6581',
    body:'#325b6da',
    padrao: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if (!elemento.classList.constains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})