let counter = 0

function timer() {
    counter ++
    console.log(counter)
}

setInterval(timer,1000)


let time = new Date()
let date = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`


function getNum() {
    const nums = [1,0]
    
    console.log(Number(Math.random(nums)))
}


setInterval(getNum,1000)

