import axios from 'axios'
import { log } from '@utils'

/**
 * get origin data
 * @param {object} params request params: name, url, data, headers and method
 * @returns {Promise<any>} a Promise with request result
 */
const fetchData = ({ name = '', url = '', data = {}, headers = {}, method = 'POST' }) => {
  return new Promise((resolve, reject) => {
    axios({ url, data, headers, method })
      .then(res => {
        log(name, res, 'success')
        resolve(res)
      })
      .catch(err => {
        log(name, err, 'danger')
        reject(err)
      })
  })
}
export default fetchData
