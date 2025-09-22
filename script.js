async function getAnimalImage() {
  const animal = document.getElementById("animalInput").value.toLowerCase();
  const imgElement = document.getElementById("animalImage");

  try {
    let url = "";

    if (animal === "cat") {
      // Free Cat API
      url = "https://api.thecatapi.com/v1/images/search";
      const response = await fetch(url);
      const data = await response.json();
      imgElement.src = data[0].url;

    } else if (animal === "dog") {
      // Free Dog API
      url = "https://dog.ceo/api/breeds/image/random";
      const response = await fetch(url);
      const data = await response.json();
      imgElement.src = data.message;

    } else {
      imgElement.src = "";
      alert("Please enter 'cat' or 'dog'.");
    }
  } catch (error) {
    console.error(error);
    alert("Failed to fetch image. Try again!");
  }
}
