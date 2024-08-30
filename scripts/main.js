let p = document.querySelector('#placeboButton')
let b = document.querySelector('#submitButton')
let h = document.querySelector('#passwordHint')
b.addEventListener('click', () => {
    let passwords = document.querySelectorAll('input[id$=\'assword\']')
    let validForm = passwords[0].value == passwords[1].value
    if (validForm) {
        passwords.forEach(p => p.classList.remove('invalid'))
        p.style.visibility = 'hidden'
        p.click()
    } else {
        passwords.forEach(p => p.classList.add('invalid'))
        h.style.visibility = 'visible'
    }
})

