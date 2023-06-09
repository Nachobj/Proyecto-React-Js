const videojuegos = [
    {nombre: "FIFA 23", precio: 10000, id: "1", stock: 8, description: "Mejor juego de fútbol", img: "https://gaming-cdn.com/images/products/10545/616x353/fifa-23-pc-juego-origin-cover.jpg?v=1665157647", idCat: "1"},
    {nombre: "GTA V", precio: 8000, id: "2", stock: 10, description: "Mejor juego de acción", img: "https://gaming-cdn.com/images/products/186/616x353/grand-theft-auto-v-pc-juego-rockstar-cover.jpg?v=1647095361", idCat: "1"},
    {nombre: "CRASH BANDICOOT", precio: 12000, stock: 5, id: "3", description: "Mejor juego de aventura", img: "https://gaming-cdn.com/images/products/7173/616x353/crash-bandicoot-4-it-s-about-time-pc-juego-battle-net-cover.jpg?v=1650615905", idCat: "2"},
    {nombre: "UFC 3", precio: 6000, id: "4", stock: 7, description: "Mejor juego de lucha", img: "https://gaming-cdn.com/images/products/4218/616x353/ea-sports-ufc-3-deluxe-edition-xbox-one-deluxe-edition-xbox-one-juego-microsoft-store-cover.jpg?v=1650449698", idCat: "3"}
]

export const getVideojuegos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(videojuegos);
        }, 2000)
    })
}


export const getDetalleJuego = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const game = videojuegos.find(game => game.id === id);
            resolve(game);
        }, 2000)
    })
}


export const getCategoriaJuego = (idCat) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const categoriaJuegos = videojuegos.filter(game => game.idCat === idCat)
            resolve(categoriaJuegos);
        }, 100)
    })
}