export const displayData = (container, data) => {

		container.innerHTML = ''
		data.forEach(product => {
			const currentProduct = document.createElement('li')

			const imageUrl = `https://corsproxy.io/?${encodeURIComponent(
				product.images[0]
			)}`

			currentProduct.innerHTML = `
			<div class='img' style="background: url(${imageUrl}); width: 50px; height: 50px"></div>
			<span>${product.title}: ${product.price}$</span>
			`
			currentProduct.addEventListener('click',()=>{
				document.querySelector('.counter').innerText = ++document.querySelector('.counter').textContent
			})
			container.appendChild(currentProduct)
		})
}
