import { getData, patchData, postData } from "./apiRequests.js"
import { API_URL } from "./config.js"
import sort from "./domActions/class.js"
import { displayData } from "./domActions/displayData.js"
const add = document.querySelector('.add')
const name = document.querySelector('.name')
const url = document.querySelector('.url')
const cont = document.querySelector('.list')
const rpos = document.querySelector('.rpos')
const sbyname = document.querySelector('.sbyname')
add.addEventListener('click', async()=>{
    let res ={
      name: name.value,
      url: url.value
    }
    await postData(`${API_URL}/img`, res)
})
 document.addEventListener('DOMContentLoaded',async()=>{
   const result = await getData(`${API_URL}/img`)
  displayData(result, cont)
 })
sbyname.addEventListener('click', async()=>{
  const result = new sort(await getData(`${API_URL}/img`))
  let q = result.sortByName()
  displayData(q,cont)
})
rpos.addEventListener('click', async()=>{
    const result = new sort(await getData(`${API_URL}/img`))
  let q = result.randomPosition()
  displayData(q,cont)
})