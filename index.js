const box = document.querySelectorAll('.box');
const body = document.querySelector('body');

box.forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.id) {
            case "red":
                body.style.backgroundColor = e.target.id;
                break;
            case "green":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;
            case "gray":
                body.style.backgroundColor = e.target.id;
                break;
            case "violet":
                body.style.backgroundColor = e.target.id;
                break;
            case "cadetblue":
                body.style.backgroundColor = e.target.id;
                break;
            case "chartreuse":
                body.style.backgroundColor = e.target.id;
                break;
            case "cornflowerblue":
                body.style.backgroundColor = e.target.id;
                break;
            case "crimson":
                body.style.backgroundColor = e.target.id;
                break;
            default:
                break;
        }
    })
})