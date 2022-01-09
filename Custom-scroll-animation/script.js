const cards= document.querySelectorAll('.card');

window.addEventListener('scroll', checkBoxes);

function checkBoxes(){
  const triggerHeight = (window.innerHeight /5 * 4);

  cards.forEach( card => {
    const cardTop = card.getBoundingClientRect().top ;

    if(cardTop < triggerHeight){
      card.classList.add('visible');
    }
    else{
      card.classList.remove('visible');
    }
  })
}

checkBoxes();
