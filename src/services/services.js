import axios from 'axios';

const GET = () => {
    const promise = new Promise((resolve, reject) => {
        axios.get('http://localhost:8888/user')
         .then(res => resolve(res))
         .catch(err => reject(err))
    })
    return promise;
}

const POST = (data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post('http://localhost:8888/user/add', data)
         .then(res => resolve(res))
         .catch(err => reject(err))
    })
    return promise;
}

const PUT = (username, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`http://localhost:8888/user/add-detail/${username}`, data)
         .then(res => resolve(res))
         .catch(err => reject(err))
    })
    return promise;
}

const DELETE = (id) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`http://localhost:8888/user/delete/${id}`)
         .then(res => resolve(res))
         .catch(err => reject(err))
    })
    return promise;
}

const method = {
    get: GET,
    post: POST,
    put: PUT,
    delete: DELETE
}

export default method;