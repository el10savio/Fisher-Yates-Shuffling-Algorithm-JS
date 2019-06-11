function fys(array) {
    let i = array.length;
    let j, temp;

    while (--i) {
        j = Math.floor(Math.random() * i + 1);
        [array[i], array[j]] = [array[j], array[i]]
    }

}
