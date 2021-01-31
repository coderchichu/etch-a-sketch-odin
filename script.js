//20210131 SH Project Script Start for etch-a-sketch


const container = document.querySelector('#grid-container');


//creating the 16x16 grid of square divs
function gridCreator(n) {

    let sqheight = Math.floor(container.clientHeight / n - 2);
    let sqwidth = Math.floor(container.clientHeight / n - 2);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const square = document.createElement('div');
            square.classList.add('square-clear');
            square.setAttribute('id', 'square' + i + j);
            square.style.height = sqheight + "px";
            square.style.width = sqwidth + "px";
            container.appendChild(square);
        }

    }

}

gridCreator(16);

//changing squares from white to black
container.addEventListener('mouseover', function (e) {

    if (e.target.id != "grid-container") {
        e.target.classList.add('square-activated');
    };

});

//button logic, listening to event
const btn = document.querySelector('#clear-btn')


//asking user to set the size of the 'pixels'. clears the boarding the the input has ben inputted.
btn.addEventListener('click', function (e) {

    let asked = true;

    const chksquares = container.querySelectorAll('div.square-clear');
    let arr = chksquares.length;

    let numDecision = prompt("How many squares? (Between 1 - 100)");

    while (asked) {

        if ((numDecision > 0) && (numDecision <= 100)) {

            for (let i = 0; i < arr; i++) {
                container.removeChild(chksquares[i]);
            }

            gridCreator(numDecision);
            break;

        } else numDecision = prompt("INVALID! Again, how many squares? (Between 1 - 100)")
    }


});