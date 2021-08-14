const open_ = document.getElementById('open')
const close_ = document.getElementById('close')
const container = document.querySelector('.container')


open_.addEventListener('click', function(){
    console.log('Show')
    container.classList.add('show-nav')
})

close_.addEventListener('click', function(){
    console.log('Hide')
    container.classList.remove('show-nav')
})