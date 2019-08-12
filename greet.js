function sayHello(how, toWhom) {
    // console.log(`${how}! I am happy to meet you`);
    const salutation = how(toWhom);
    console.log(`${salutation}! I can't wait to party`)
}
module.exports = sayHello;