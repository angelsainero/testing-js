import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

class Users {
    static all() {
        return axios.get(`${BASE_URL}/users`).then(response => response.data)
    }
}

module.exports = Users