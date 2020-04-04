const toggle = document.querySelector('#dark-mode-toggle');
let root = document.documentElement;
toggle.addEventListener('change', (e) => {
    const isChecked = e.target.checked;

    if(isChecked) {
        localStorage.setItem('darkmode', true)
        root.style.setProperty('--primary', 'hsl(230, 17%, 14%)')
        root.style.setProperty('--secondary', 'hsl(232, 19%, 15%)')
        root.style.setProperty('--text-primary', 'hsl(0, 0%, 100%)')
        root.style.setProperty('--text-secondary', 'hsl(228, 34%, 66%)')
    } else {
        localStorage.setItem('darkmode', false)
        root.style.setProperty('--primary', '#fff')
        root.style.setProperty('--secondary', '#f4f4f4')
        root.style.setProperty('--text-primary', 'rgb(39, 37, 37)')
        root.style.setProperty('--text-secondary', 'rgb(122, 121, 121)')
    }

})

document.addEventListener('DOMContentLoaded', () => {
    const isChecked = JSON.parse(localStorage.getItem('darkmode'))
    console.log()
    if(isChecked) {
        root.style.setProperty('--primary', 'hsl(230, 17%, 14%)')
        root.style.setProperty('--secondary', 'hsl(232, 19%, 15%)')
        root.style.setProperty('--text-primary', 'hsl(0, 0%, 100%)')
        root.style.setProperty('--text-secondary', 'hsl(228, 34%, 66%)')
        toggle.checked = true
        console.log("ENABLE")
    } else {
        root.style.setProperty('--primary', '#fff')
        root.style.setProperty('--secondary', '#f4f4f4')
        root.style.setProperty('--text-primary', 'rgb(39, 37, 37)')
        root.style.setProperty('--text-secondary', 'rgb(122, 121, 121)')
        toggle.checked = false
        console.log("DISABLE")
    }
})


// --primary: #fff;
// --secondary: #f4f4f4;
// --text-primary: rgb(39, 37, 37);
// --text-secondary: rgb(122, 121, 121);