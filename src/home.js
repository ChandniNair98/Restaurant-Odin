export function loadHome()
{
    const content=document.querySelector('.content')

    const brownbox=document.createElement('div')
    brownbox.id='brownbox'

    const tagline=document.createElement('p')
    tagline.id='tagline'
    tagline.textContent='Indulge your senses with our delectable array of cakes at our cake shop. From classic flavors like rich chocolate and velvety vanilla to tantalizing specialty creations, each cake is crafted with the finest ingredients and utmost care. Whether you are celebrating a special occasion or simply satisfying your sweet tooth, our cakes promise to delight with their moist textures, intricate designs, and irresistible flavors. Visit us today and experience the joy of indulgence with every slice of our heavenly cakes.'
    brownbox.appendChild(tagline)

    const mainImg=document.createElement('div')
    mainImg.id='mainImg'
    brownbox.appendChild(mainImg)


    content.appendChild(brownbox)

}