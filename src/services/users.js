const api = "https://api.github.com/users";

const getUser = async (user) => {
    const response = await fetch(`${api}/${user}`, {
        method: "GET"
    });

    const payload = response.json();

    return payload;

}

export default getUser;