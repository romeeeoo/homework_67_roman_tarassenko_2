$(document).ready(function () {
    let page = 1
    let charList = $("#id-char-list")
    let allCharUrl = "https://rickandmortyapi.com/api/character/?page=" + page
    let nextBtn = $("#id-next-btn")
    let prevBtn = $("#id-prev-btn")


    let getPage = function () {
        $.ajax({
            url: allCharUrl,
            method: "get",
            dataType: "json",
            success: function (response) {
                console.log(response)
                let charObjects = response.results
                for (let i in charObjects) {
                    charList.append(
                        `<div class="card col-lg-3 m-2 pt-2">
                    <img src="${charObjects[i].image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${charObjects[i].name}</h5>
                            <a href="character.html?id=${charObjects[i].id}" class="btn btn-primary">details</a>
                        </div>
                </div>`
                    )
                }
                if (!!response.info.next) {
                    nextBtn.show()
                    nextBtn.attr("data-url", response.info.next)
                }
                else {
                    nextBtn.hide()
                }
                if (!!response.info.prev) {
                    prevBtn.show()
                    prevBtn.attr("data-url", response.info.prev)
                }
                else{
                    prevBtn.hide()
                }
            }
        });
    };

    function switchPage(event) {
        event.preventDefault()
        let switchBtn = $(this)
        $.ajax({
            url: switchBtn.attr("data-url"),
            method: "get",
            dataType: "json",
            success: function (response) {
                let nextCharObjects = response.results
                charList.html("")
                for (let i in nextCharObjects) {
                    charList.append(
                        `<div class="card col-lg-3 m-2 pt-2">
                                        <img src="${nextCharObjects[i].image}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                        <h5 class="card-title">${nextCharObjects[i].name}</h5>
                                        <a href="character.html?id=${nextCharObjects[i].id}" class="btn btn-primary">details</a>
                                        </div>
                                        </div>`
                    )
                }
                if (!!response.info.next) {
                    console.log(response)
                    nextBtn.show()
                    nextBtn.attr("data-url", response.info.next)
                } else {
                    nextBtn.hide()
                }
                if (!!response.info.prev) {
                    prevBtn.show()
                    prevBtn.attr("data-url", response.info.prev)
                } else (prevBtn).hide()
            }
        })
    };

    getPage();
    $("#id-next-btn").click(switchPage);
    $("#id-prev-btn").click(switchPage);
});