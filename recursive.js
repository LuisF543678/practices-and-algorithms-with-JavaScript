
/**
 * Funcion recursiva normal
 */
const conteoRegresivo = (a) => {
    if (a < 0) {
        console.log(a)
        return conteoRegresivo(a - 1)
    }
}

conteoRegresivo(10)



/**
 * Funcion recursiva version 1 con axios
 */

const axios = require('axios')

const llamdaApi = async (url, llamados = 0) => {
    try {
        const result = await axios.get(url)
        console.log(result)
        return result
    } catch (e) {
        if (llamados > 5) {
            return ''
        }
        console.log(e)
        return llamdaApi(url, llamados + 1)
    }
}

llamdaApi('https://jsonplaceholder.typicode.com/users/')


/**
 * Funcion recursiva con axios version 2
 */

const axios = require('axios')

const llamdaApi = async (url, llamados = 0) => {
    try {
        const {data} = await axios.get(url)
        console.log(data)
        return result
    } catch (e) {
        if (llamados > 5) {
            return ''
        }
        console.log(e)
        return llamdaApi(url, llamados + 1)
    }
}

llamdaApi('https://jsonplaceholder.typicode.com/users/')