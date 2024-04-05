import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backend.directd.com.br/api',
  headers:  {
    'Token': "2E51B915-81A5-465F-B272-6C54F00B9C8E"
  }
});