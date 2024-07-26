import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, AxiosRequestHeaders } from 'axios'

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

const http: AxiosInstance = axios.create({
  baseURL: 'https://tech-test-backend.dwsbrazil.io',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use(
  (config: AdaptAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(`Response received from ${response.config.url}`)
    return response
  },
  (error: AxiosError) => {
    if (error.response) {
      console.error('Response error:', error.response.status, error.response.data)
      if (error.response.status === 401) {
        console.error('Unauthorized access - redirecting to login')
      } else if (error.response.status === 404) {
        console.error('Resource not found')
      } else if (error.response.status === 500) {
        console.error('Internal server error')
      }
    } else if (error.request) {
      console.error('No response received:', error.request)
    } else {
      console.error('Error setting up request:', error.message)
    }
    return Promise.reject(error)
  }
)

export default http
