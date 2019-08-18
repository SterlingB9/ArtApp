window.addEventListener('load', () => {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })

    let isDrawing = true;
    let x = event.clientX - canvas.getBoundingClientRect().left;
    let y = event.clientY - canvas.getBoundingClientRect().top;
    
    function startPosition() {
        isDrawing = true;
    }

    function finishPosition() {
        isDrawing = false;
    }

    function draw(event) {
        if (!isDrawing) {
            return
        }
        else {
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';

            ctx.lineTo(x, y)
            ctx.stroke()
        }
    }

    canvas.addEventListener('mousedown', startPosition)
    canvas.addEventListener('mouseup', finishPosition)
    canvas.addEventListener('mousemove', draw)
})

function getCoords(event) {
    console.log(event.clientX, event.clientY)
}

window.addEventListener('click', getCoords)