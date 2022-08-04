const $button_next = document.querySelector('.btn-next')
const $button_back = document.querySelector('.btn-back')
const $cards_pokemon = document.querySelectorAll('.card-hidde')
const min_card = 0
let card_select = 0




function change_card_back(){
    if(card_select > min_card){
        $cards_pokemon[card_select].classList.remove('card-select')
        card_select--
        $cards_pokemon[card_select].classList.add('card-select')
    }
        

}

function change_card_next(){
    if (card_select < $cards_pokemon.length - 1){
        card_select++
        $cards_pokemon[card_select].classList.add('card-select')
    }

}


$button_back.addEventListener('click', change_card_back)
$button_next.addEventListener('click', change_card_next)
