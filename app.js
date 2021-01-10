const display = document.getElementById( 'display' );
const btns = Array.from( document.getElementsByClassName( 'btn' ) );
// console.log(btns);

btns.map( btn => {
    btn.addEventListener( 'click', ( e ) => {
        // console.log( e.target.innerText );
        switch ( e.target.innerText ) {
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if ( display.innerText ) {                    
                    display.innerText = display.innerText.slice( 0, -1 );
                }
                break;
            case '=':
                try {                    
                    display.innerText = eval( display.innerText );
                } catch {
                    display.innerText = 'Error!'
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
        
    })
})