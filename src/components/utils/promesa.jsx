<<<<<<< HEAD
let is_ok = true;
const customFetch =(time, task) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task);
            } else{
                reject("Error");
            }
        }, time)
=======
import products from './datos';

let is_ok = true;
const customFetch =() =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(products);
            } else{
                reject("Error");
            }
        }, 2000)
>>>>>>> 89a18988d4e3b86f3b0e2818631d5931eed63fe9
    })
}

export default customFetch;