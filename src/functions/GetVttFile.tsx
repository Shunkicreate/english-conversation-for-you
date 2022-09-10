// import { useEffect } from 'react'
import axios from 'axios';
export const GetVttFile = async () => {
    var data = {
        "url": "https://www.youtube.com/watch?v=i0ShMDZ_q-U"
    };

    var config = {
        method: 'post',
        url: 'https://127.0.0.1:5000/youtubeDlSubtitles',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return JSON.stringify(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    // axios.get('http://127.0.0.1:5000/youtubeDlSubtitles', config, data)
}