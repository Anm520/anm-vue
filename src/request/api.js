import Axios from './http.js';
export const query = (params) => { return Axios.get('/api/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb', { params }); };
