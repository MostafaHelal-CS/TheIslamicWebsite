let theTafasirPart=document.querySelector(".tafasir"),
    theSurahsTafasir=document.querySelector(".surahsTafasir"),
    theTafasirAudio=document.querySelector(".tafasirAudio audio");

function getTafaisr () {
    fetch("https://www.mp3quran.net/api/v3/tafsir?tafsir=1&language=ar")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.tafasir.name);
            let allSurahsTafasir=data.tafasir.soar;

            allSurahsTafasir.forEach((tafasir) => {
                let theOption=document.createElement("p");
                theOption.value=tafasir.name;
                theOption.innerHTML=tafasir.name;

                theSurahsTafasir.append(theOption);

                theOption.addEventListener('click', () => {
                    console.log(tafasir.url);
                    theTafasirAudio.src=tafasir.url;
                });
            });
        });

}

getTafaisr();