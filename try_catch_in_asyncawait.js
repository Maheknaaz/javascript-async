async function fetchUser(){
    try {
        let res = await fetch("Inavalid url");
        let data = await res.json();
        console.log(data);
    } catch(error){
        console.log("Error:", error.message);
    }
}

fetchUser();