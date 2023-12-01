export const create = async ({ firstName, username, email, password }) => {
    const response = await fetch(`https://localhost:3030/users`, {
        method: 'post',
        headers: { 'content/type': 'aplycation/json' },
        body: JSON.stringify({ firstName, username, email, password })
    })
    console.log(response.body);
    const result = await response.json()
    return result
}

