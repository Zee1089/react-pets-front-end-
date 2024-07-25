//will hold the base URL for our API, and any functions that make calls to the server for data. 
//This structure will help us keep our code DRY and easy to maintain.
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const index = async () => {
    try {
    const res = await fetch(BASE_URL);
    return res.json();
} catch (err) {
    console.log(err);
    }
};

export { index };

