import axios from 'axios';

const API_URL = 'http://137.184.236.70:3000';

const enum endpoints {
  retreiveData = '/retrieveData',
}

export const retrieveData = async (): Promise<any> => {
  let body = {
    contract: '0xe9baceea645e8be68a0b63b9764670f97a50942f',
    queryid: 'A',
    maxRes: '3',
  };

  axios
    .post(API_URL + endpoints.retreiveData, { body })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
