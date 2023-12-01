export default GetAllUsers=async ()=>{

    const users = await fetch("http://localhost:3030/users")
    console.log(users.json());
    allUsers = users.json()
return(
    <div>

    </div>
)
}