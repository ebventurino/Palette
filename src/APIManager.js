


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
        value: (favoriteObject,userId) => {
            return fetch(`http://localhost:5002/favorites?userId=${userId}`, {
                method: "POST",
                body: JSON.stringify(favoriteObject),
                headers: {
                    "Content-Type": "application/json"
                }
             })
             .then(() => { return fetch(`http://localhost:5002/favorites?userId=${userId}`) })
                .then(a => a.json())
        }
    },
    getAllFavorites: {
        value: (userId) => {
            return fetch(`http://localhost:5002/favorites?userId=${userId}`)
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
         })
         .then(e => e.json())
         //.then(() => { return fetch("http://localhost:5002/favorites/") })
          
      }
      
    },
  
inputComment: { 
    value: (id) => {
        return fetch(`http://localhost:5002/comments/${id}`)
        .then(e => e.json())
    }
},


updateComment: {
    value: (commentsToEdit) => {
        return fetch(`http://localhost:5002/comments/${commentsToEdit.id}`, {
            method: "PUT",
            body: JSON.stringify(commentsToEdit),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => { return fetch("http://localhost:5002/comments") })
            .then(a => a.json())
    }
},

registerUser: {
    value: (newObject) => {
        return fetch("http://localhost:5002/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newObject)
        })
            // When POST is finished, retrieve the new list of tasks
            .then(e => e.json()) 
                
    }
}
})




export default ApiManager

