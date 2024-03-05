import axios from 'axios';
const base_url = 'http://localhost:5010/api/';
export async function getCourseInformation() {
    try {
        const response = await axios.get(base_url + 'Courses');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

