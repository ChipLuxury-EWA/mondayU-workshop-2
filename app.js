const endGameData = [
    {
        name: "space-stone",
        avengers: ["captain-america", "iron-man"],
    },
    {
        name: "mind-stone",
        avengers: ["ant-man", "captain-america"],
    },
    {
        name: "reality-stone",
        avengers: ["rocket-raccoon", "thor"],
    },
    {
        name: "power-stone",
        avengers: ["war-machine", "nebula"],
    },
    {
        name: "time-stone",
        avengers: [{ name: "hulk" }],
    },
    {
        name: "soul-stone",
        avengers: ["black-widow", "hawkeye"],
    },
];

const clickedMatched = { clickedStone: "", clickedAvengers: [] };

function checkMatch(stone, avengers) {
    console.log("checking match for stone:", stone);
    console.log(clickedMatched.clickedAvengers);
    console.log("db avengers:", avengers);

    if (
        clickedMatched.clickedAvengers.sort().toString() ===
        avengers.sort().toString()
    ) {
        console.log("Match!");
        return true;
    } else {
        console.log("no match");
        return false;
    }
}

// check 'load dash' library.
// difereence between json stringfy and to string

const stones = document.querySelectorAll(".stone");
const avengers = document.querySelectorAll(".avenger");
const glove = document.querySelector(".infinity_glove");

glove.addEventListener("click", ({ target }) => {
    console.log("USE WITH CAUTION!!!", target.id);
    let match = false;

    let checkDB = endGameData.filter(
        (item) => item.name === clickedMatched.clickedStone
    );
    if (checkDB[0] === undefined) {
        console.log("Choose a stone, choose wisely");
    } else {
        const match = checkMatch(
            clickedMatched.clickedStone,
            checkDB[0].avengers
        );
    }
    clearClickedMatch();
});

for (let i = 0; i < stones.length; i++) {
    // console.log(stones[i].id)

    stones[i].addEventListener("click", ({ target }) => {
        if (clickedMatched.clickedStone === "") {
            target.style.backgroundColor = "blue";
            console.log("clicked on stone:", target.id);
            clickedMatched.clickedStone = target.id;
        } else {
            console.log("You can't handle more then one stone, it's DANGEROUS");
        }
    });
}

for (let i = 0; i < avengers.length; i++) {
    // console.log(stones[i].id)
    avengers[i].addEventListener("click", ({ target }) => {
        if (clickedMatched.clickedAvengers.length >= 2) {
            console.log("Don't chhose more then two avengers, they are very busy")
            // clickedMatched.clickedAvengers = [];
            // clearClickedMatch();
        } else {
            clickedMatched.clickedAvengers.push(target.id);
            target.style.backgroundColor = "blue";
            console.log("clicked on avengers:", target.id);
        }
    });
}

function clearBackgroundSelections() {
    for (let i = 0; i < avengers.length; i++) {
        avengers[i].style.backgroundColor = "";
    }
    for (let i = 0; i < stones.length; i++) {
        stones[i].style.backgroundColor = "";
    }
}

function clearClickedMatch() {
    clickedMatched.clickedStone = "";
    clickedMatched.clickedAvengers = [];
    clearBackgroundSelections();
    console.log("All selections cleared");
}
