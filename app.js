$("video").mediaelementplayer({
  features: ["playpause", "progress", "tracks", "volume", "fullscreen"],
  // startLanguage: "en"  /* bug */
});


(function () {
  let cuisines = ["Italian", "American", "Korean", "Thai", "Caribbean", "Chinese", "Latin American", "Spanish", "Italian", "Japanese"];
  let cuisinesTable = "";
  
  for (let i = 0; i < cuisines.length; i++) {
    cuisinesTable += `
      <tr>
        <th scope="row">${i + 1}</th>
        <td>${cuisines[i]}</td>
        <td><a href="">link</a></td>
      </tr>
    `;
  }
  
  let more = `
    <tr>
      <th scope="row"></th>
      <td><a href="#">More here</a></td>
      <td></td>
    </tr>
  `;
  
  let tbody = document.querySelector("tbody")
  tbody.innerHTML = cuisinesTable += more;
})();