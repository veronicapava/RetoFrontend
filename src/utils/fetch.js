const fetchUsers = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error)
    }

};

export default fetchUsers