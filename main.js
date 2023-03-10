window.addEventListener("load", init);


function init() {
    var kepHely;
    const KEPEK = ["https://th.bing.com/th/id/R.16d0248bd00fcf7d3bddccee0a00cee7?rik=cLkXOSX6RR7OKQ&riu=http%3a%2f%2fstatic.keptelenseg.hu%2fp%2f659074f25f1d646c6f2ea9015a9cb3b9.jpg&ehk=ynB6NIWJBDT%2b1KmF8Iybbz1iphJm02qi1FQ%2fwi6qCrw%3d&risl=&pid=ImgRaw&r=0",
        "https://static.keptelenseg.hu/p/7b4aabd5caac3540a8c9f57472d21c22.jpg",
        "https://th.bing.com/th/id/R.ad450b211608940b45e226af71e30356?rik=5wR2HY1LHJ0o1Q&riu=http%3a%2f%2fstatic.keptelenseg.hu%2fp%2fc94ca6784fc64b1c5a76d6ab718580f4.jpg&ehk=ELtu%2fd65lH23DkAIuxqK0hqUE0lXwja9YullTvYEqTw%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.e33a97f172d928fd36684dd68621de4f?rik=GF7PajWWolproA&riu=http%3a%2f%2fstatic.keptelenseg.hu%2fp%2f9321b3574a19652e7e4efdf76c674270.jpg&ehk=ELWxDYyDxS6Ayzdzdkb%2biI5By9gxuzoOBNX6wa9WtoU%3d&risl=&pid=ImgRaw&r=0",
        "https://1.bp.blogspot.com/-f4Qjh5ac4WE/Xlg2fTFE_OI/AAAAAAAAHtM/h7gKz4K-yCcxvIYXCYIuqwEWlrG4yzQJACKgBGAsYHg/s1600/largesumerlight1.jpg",
        "https://th.bing.com/th/id/R.418d6f5727dd567dd14bde0a7f87cf7e?rik=VrHcKzBzlZsDFw&riu=http%3a%2f%2fstatic.keptelenseg.hu%2fp%2fcfb6c0ce42caccc8f3da9c9e733d8c62.jpg&ehk=S3Momz2ag8LCkklLA6nxQKt8Py1EOXt5jcwBUrwiYo0%3d&risl=&pid=ImgRaw&r=0",
        "https://static.keptelenseg.hu/p/9e81bd7f7f224856c48c8300dc7a339c.jpg",
        "https://th.bing.com/th/id/R.0cfe98b1a6e2ce64b65e0ae95a8c10b1?rik=YmG7%2b0ZkHcXdTw&riu=http%3a%2f%2fstatic.keptelenseg.hu%2fp%2fff2b664e960c5e989cbde8b9b9e505c6.jpg&ehk=MD8XfmpvlHQfye0t%2bcYBNnRxubfm0QXGDE2xJJQHC1o%3d&risl=&pid=ImgRaw&r=0"];

    const ARTICLE = document.querySelectorAll("article");
    for (let index = 0; index < KEPEK.length; index++) {
        ARTICLE[0].innerHTML += '<div><img src="' + KEPEK[index] + '" alt="kep"></div>';
    }

    const NAGYKEP = document.querySelectorAll('section div');
    NAGYKEP[0].innerHTML = '<img src="' + KEPEK[0] + '" alt="kep">';
    const KEP = document.querySelectorAll("article img");
    for (let index = 0; index < KEPEK.length; index++) {
        KEP[index].addEventListener('click', function () {
            console.log(KEPEK[index]);
            const NAGYKEP = document.querySelectorAll('section div');
            NAGYKEP[0].innerHTML = '<img src="' + KEPEK[index] + '" alt="kep">';
        });
    }

    const GOMB = document.querySelectorAll("section button");
    GOMB[0].addEventListener('click', function () {
        const NAGYKEP = document.querySelectorAll('section div');
        const KEP = document.querySelectorAll('section div img');
        var kepNev = KEP[0].getAttribute('src');
        for (let index = 0; index < KEPEK.length; index++) {
            if (KEPEK[index] == kepNev) {
                kepHely = index;
            }
        }
        if (kepHely == 0) {
            kepHely = KEPEK.length - 1;
            NAGYKEP[0].innerHTML = '<img src="' + KEPEK[kepHely] + '" alt="kep">';
        } else {
            NAGYKEP[0].innerHTML = '<img src="' + KEPEK[kepHely - 1] + '" alt="kep">';
        }
    });

    GOMB[1].addEventListener('click', function () {
        const NAGYKEP = document.querySelectorAll('section div');
        const KEP = document.querySelectorAll('section div img');
        var kepNev = KEP[0].getAttribute('src');
        for (let index = 0; index < KEPEK.length; index++) {
            if (KEPEK[index] == kepNev) {
                kepHely = index;
            }
        }
        if (kepHely == KEPEK.length - 1) {
            kepHely = 0;
            NAGYKEP[0].innerHTML = '<img src="' + KEPEK[kepHely] + '" alt="kep">';
        } else {
            NAGYKEP[0].innerHTML = '<img src="' + KEPEK[kepHely + 1] + '" alt="kep">';
        }

    });
}