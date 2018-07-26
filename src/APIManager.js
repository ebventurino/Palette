//login
const ApiManager = Object.create({}, {

getUserByUserName: {
    value: (userName) => {
        return fetch(`http://localhost:5002/users?userName=${userName}`)
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
}
})
export default ApiManager