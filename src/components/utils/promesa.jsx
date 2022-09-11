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
    })
}

export default customFetch;