import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-d5af3.firebaseio.com/'
})