// exports.foo = 'foo'
// exports.f = function name(params) {
    
// }
// exports.num = 10

// export const foo = 'bar'
// export const f = function name(params) {
    
// }
// export const num = 10


 const foo = 'bar'
 const f = function name(params) {
    
}
export const num = 10

 export {
     foo,
     f
 }
//  相当于 module.exports=function(){}
 export default function () {
     console.log('fff')
 }