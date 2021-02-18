import { MenuList } from '@chakra-ui/react';
import React from 'react';
import '../css/quantityChoice.css'

// function QuantityChoice(menuList){
    // const{menuID, menuName} = menuList;

    // function plusClicked(valueChange) {
    //     const{}

    //     return(
            
    //     );

    //     console.log(MenuList.data[key].menuID)
    // }

    // function minusClicked() {
        
    //     ('.count').prop('disabled', true);
   	// 		(document).on('click','.plus',function(){
	// 			('.count').val(parseInt(('.count').val()) + 1 );
    // 		});
    // }
function QuantityChoice(){
    return(
        

        <div class="qty mt-5">
            
            <span class="minus bg-dark">-</span>
            <input type="number" class="count" name="qty" value="1" min="1" max="10"/>
            {/* <span class="plus bg-dark" onClick={() => {plusClicked()}}>+</span> */}
            <span class="plus bg-dark">+</span>
        </div>
    );

    
}



export default QuantityChoice;