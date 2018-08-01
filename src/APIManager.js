//login
// getUserByUserName: {
//     value: (userName) => {
//         return fetch(`http://localhost:5002/users?userName=${userName}`)
//             .then(e => e.json())
//     }
// }

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
            return fetch("http://localhost:5002/favorites")
                .then(e => e.json())
                .then(favorites => this.setState({ favorites: favorites }))
        }
    },
    getAllComments: {
        value: () => {
            return fetch("http://localhost:5002/comments")
                .then(e => e.json())
        }
    },
    
    addComment: {
        value: (newObject) => {
            return fetch("http://localhost:5002/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newObject)
            })
                // When POST is finished, retrieve the new list of tasks
                .then(() => {
                    return fetch("http://localhost:5002/comments")
                })
                .then(a => a.json())
        }
    },
    
    
})



export default ApiManager

