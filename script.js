document.body.onload = async () => {
    while (true) {
        if (document.getElementById("rq").getBoundingClientRect().y < 10) document.documentElement.style.scrollBehavior = "auto"
        else document.documentElement.style.scrollBehavior = "smooth"
        window.scrollTo(0, document.getElementById("rq").getBoundingClientRect().y)
        await sleep(10)
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}