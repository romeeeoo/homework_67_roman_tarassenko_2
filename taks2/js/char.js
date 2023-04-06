$(document).ready(function() {
    let charDetails = $("#id-char-details")
    let urlParams = new URLSearchParams(window.location.search)
    let charID = urlParams.get("id")

    let charUrl = `https://rickandmortyapi.com/api/character/${charID}`
    console.log(charUrl)

    $.ajax({
        url: charUrl,
        method: "get",
        dataType: "json",
        success: function (response, status) {
            console.log(response)
            let charObj = response
            charDetails.append(
                `<div class="card col-lg-10 m-2 pt-2">
                    <img src="${charObj.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${charObj.name}</h5>
                            <p class="card-text">gender: ${charObj.gender}</p>
                            <p class="card-text">location: ${charObj.location.name}</p>
                            <p class="card-text">origin: ${charObj.origin.name}</p>
                            <p class="card-text">sepecies: ${charObj.species}</p>
                            <p class="card-text">status: ${charObj.status}</p>
                            <p class="card-text">participate in ${charObj.episode.length} episode(-s)</p>
                            
                        </div>
                </div>`)
            console.log(status)
        }
    });

});