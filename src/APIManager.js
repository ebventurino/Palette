//login
getUserByUserName: {
    value: (userName) => {
        return fetch(`http://localhost:5002/users?userName=${userName}`)
            .then(e => e.json())
    }
}

const ApiManager = Object.create({}, {

    getIdOfCurrentUser: {
        value: () => {
            const databaseString = localStorage.getItem("credentials")
            const currentUserObject = JSON.parse(databaseString)
            console.log("User stuff", currentUserObject)
            return currentUserObject.currentUserId
        }
    },
    loadingFavorites: {
        value: (favoriteObject) => {
            return fetch(`http://localhost:5002/favorites`, {
                method: "POST",
                body: JSON.stringify(favoriteObject),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => { return fetch("http://localhost:5002/favorites?completed=false") })
                .then(a => a.json())
        }
    },
    getAllFavorites: {
        value: (photoUrl) => {
            return fetch("http://localhost:5002/favorites?photoUrl")
                .then(e => e.json())
                .then(favorites => this.setState({ favorites: favorites }))
        }
    }
    
    
    
})



export default ApiManager

