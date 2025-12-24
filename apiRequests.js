
export const getData = url => {
	return new Promise((resolve, reject) =>
		fetch(url)
			.then(response => response.json())
			.then(json => resolve(json))
			.catch(error => {
				const e = document.querySelector('.error')
				e.style.transform ='translateX(0%)'
				e.innerText = error
				setTimeout(()=>{
					e.style.transform = 'translateX(350%)'
				})
				reject(error) 
			},5000)
	)
}

export const postData = (url, data) => {
	return new Promise((resolve, reject) =>
		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		})
			.then(res => res.json())
			.then(json => resolve(json))
			.catch(err =>{ 
								const e = document.querySelector('.error')
				e.style.transform ='translateX(0%)'
				e.innerText = err
				setTimeout(()=>{
					e.style.transform = 'translateX(350%)'
				},5000)
				reject(err)
			})
	)
}

export const patchData = (url, id, updatedData) => {
	return new Promise((resolve, reject) =>
		fetch(`${url}/${id}`, {
			method: 'PATCH',
			body: JSON.stringify(updatedData),
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		})
			.then(res => res.json())
			.then(json => resolve(json))
			.catch(err => {
								const e = document.querySelector('.error')
				e.style.transform ='translateX(0%)'
				e.innerText = err
				setTimeout(()=>{
					e.style.transform = 'translateX(350%)'
				},5000)
				reject(err)
			})
	)
}

export const deleteData = (url, id) => {
	return new Promise((resolve, reject) =>
		fetch(`${url}/${id}`, {
			method: 'DELETE'
		})
			.then(res => {
				if (res.ok) resolve('Данные успешно удалены')
				else reject('Ошибка удаления данных')
			})
			.catch(err => {
				reject(err)
			},5000)
	)
}
