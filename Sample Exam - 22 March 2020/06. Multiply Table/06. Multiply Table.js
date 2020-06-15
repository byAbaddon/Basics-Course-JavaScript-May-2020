function multiplyTable(input) {
    let third = input[0][0]
    let second = input[0][1]
    let first = input[0][2]

    for (let i = 1; i <= second; i++) {
        for (let j = 1; j <= first; j++) {
            for (let k = 1; k <= third; k++) {
                console.log(`${i} * ${j} * ${k} = ${i * j * k};`)
            }
        }
    }
}

//multiplyTable(['222'])
//multiplyTable(['342'])