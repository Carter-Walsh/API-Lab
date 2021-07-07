// const { default: axios } = require("axios");

const button = document.querySelector("button");


const handleClick = () => {
    axios.get("https://swapi.dev/api/planets/2").then((res) => {
        
        const residents = res.data.residents;

        for (let person of residents) {
            axios.get(person).then(res => {
                let element = document.createElement("h2");
                element.textContent = res.data.name;
                document.getElementById("list").appendChild(element);
            });
        }
    });
}

button.addEventListener("click", handleClick);