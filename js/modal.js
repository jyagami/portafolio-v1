const btnModal = document.getElementById('btnModal'),
    closeModal = document.getElementById('closeModal');

btnModal.addEventListener('click', () => {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modalShadow').style.display = 'flex';
    /* animated */
    document.getElementById('modal').classList.remove('bounceOutUp');
    document.getElementById('modal').classList.add('zoomInUp');
});

closeModal.addEventListener('click', ()=>{
    
    /* document.getElementById('modal').classList.add('bounceOutUp'); */
    document.getElementById('modal').classList.remove('zoomInUp');
    document.getElementById('modal').classList.add('bounceOutUp');
    setTimeout(()=>{
        document.getElementById('modal').style.display = 'none';
        document.getElementById('modalShadow').style.display = 'none';
    }, 700);
});