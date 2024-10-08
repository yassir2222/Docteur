/*=============== SHOW MODAL ===============*/
const tags =document.getElementById('tags')
const author =document.getElementById('author')
const postN=document.getElementById('post-nav')
const footer=document.getElementById('colophon')
const popUp=document.getElementById('modal')
const main=document.getElementById('main-section')
const header2=document.getElementById('header2')
let scrollPosition


popUp.classList.add('hide')
    // Create an Intersection Observer
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                show ('modal-container');
                observer.unobserve(entry.target); // Optional: Stop observing after the function is called
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed
    
    // Target the section with id="final"
    let target = document.getElementById('final');
    observer.observe(target);
 
function show (modalContent){
    modalContainer = document.getElementById(modalContent)
    scrollPosition = window.scrollY;
    if (window.innerWidth <= 500) {
        header2.classList.add('hide')
    } 
    popUp.classList.remove('hide')
            modalContainer.classList.add('show-modal')
            tags.classList.add('hide')
            author.classList.add('hide')
            postN.classList.add('hide')
            footer.classList.add('hide')
            main.classList.add('hide')
}

const showModal = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton)
    
    modalContainer = document.getElementById(modalContent)
    
    if(openBtn && modalContainer){
        openBtn.addEventListener('click', ()=>{
            popUp.classList.remove('hide')
            modalContainer.classList.add('show-modal')
            tags.classList.add('hide')
            author.classList.add('hide')
            postN.classList.add('hide')
            footer.classList.add('hide')
        })
    }
}


showModal('open-modal','modal-container')

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal(){
    const modalContainer = document.getElementById('modal-container')
    tags.classList.remove('hide')
    if (window.innerWidth <= 500) {
        header2.classList.remove('hide')
    } 
    author.classList.remove('hide')
    author.classList.remove('hide')
    footer.classList.remove('hide')
    main.classList.remove('hide')
    postN.classList.remove('hide')
    modalContainer.classList.remove('show-modal')
    popUp.classList.add('hide')

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // Add smooth scrolling
    });
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))
