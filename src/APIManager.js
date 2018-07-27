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
        value: () => {
            return fetch("http://localhost:5002/favorites?completed=false")
                .then(e => e.json())
        }
    },

    
    
    // //passing in id, getting tasks and setting state
    // completeTask = (passingIn) => {
    //     console.log(Database.updateOneItem)
    //     Database.updateOneItem(passingIn)
    //         .then((gettingTasks) => {
    //             console.log(gettingTasks, "getting tasks")
    //             Database.getAllTasks()
    //                 .then(tasks => this.setState({ tasks: tasks }))

    //         })
    // },
    // // posting tasks to the dom
    // addTask(event) {
    //     event.preventDefault()
    //     const newObject = { name: this.state.TaskName, DueDate: this.state.DueDate, completed: false }
    //     fetch("http://localhost:5002/tasks", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(newObject)
    //     })
    //         // When POST is finished, retrieve the new list of tasks
    //         .then(() => {
    //             Database.getAllTasks()
    //                 .then(tasks => this.setState({ tasks: tasks }))
    //         }
    //         )
    // }
})



export default ApiManager

