import axios from "axios";
const api_url = 'http://localhost:5000';

export default class Service {

    static getAll = () => {
        let obj = {
            method: "GET",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Host': 'Host'
            })
        };
        return new Promise(
            (resolve, reject) => {
                fetch(api_url + "/services", obj)
                    .then(data => {
                        resolve(data.json());
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
    }

    static insertOne = async(service) => {
        await axios.post(api_url + "/services", service, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res)
            .catch((err) => console.log(err));
    }
}