


const ApiManager = Object.create({}, {
    
    getUserByEmail: {
        value: (email) => {
            return fetch(`http://localhost:5002/users?email=${email}`)
                .then(e => e.json())
        }
    },

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
               
        }
    },
    getAllComments: {
        value: (userInput) => {
            return fetch(`http://localhost:5002/comments`)
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
                .then(e => e.json()) 
                    
        }
    },
    updateOneComment: {
        value: (message) => {
            console.log(message)
            return fetch(`http://localhost:5002/comments/${message}`, {
                method: "PATCH",
                body: JSON.stringify({
                    completed: true
                }),
                headers: { "Content-Type": "application/json" },
            })
                .then(e => e.json())
        }
    },



deleteComment: {
    value: (itemId) => {
      return fetch(`http://localhost:5002/comments/${itemId}`, {
          method: "DELETE"
      })
    }
  },

  deletePhoto: {
    value: (itemId) => {
      return fetch(`http://localhost:5002/favorites/${itemId}`, {
          method: "DELETE"
        }).then(() => { return fetch("http://localhost:5002/favorites/") })
          
      }
      
    },
  

  updateComment: {
    value: (itemId) => {
        return fetch(`http://localhost:5002/comments/${itemId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(itemId)
        })
        
            // .then(e => e.json())
    }
},

  
})



export default ApiManager

