import axios from 'axios'

axios.get('/api/ping').then(res=>{
  console.log(res)
})


const a = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve(1)
  },100)
})

a.then(res=>{
  console.log(res)
})


