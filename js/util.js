function func1() {
    console.log('func1');
}
function func2() {
    console.log('func2');
}
export default function() {
    console.log('default');
}
export {func1, func2};