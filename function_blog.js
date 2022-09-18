const articles = [
    {
        id: 1,
        img: "./images/noticias/grand-theft-auto-vi-2024-300x300.jpg",
        span: "16",
        subtitle: "Most videos removed by Take-Two",
        title: "Rockstar Games confirms GTA VI leaks with a statement",
        info: "These images seem to confirm bloomberg's information, which pointed to it taking place in Vice City and would have two main characters in reference to Bonnie and Clyde.",
        date: "September 18, 2022",
        author: "Niko Bellic",
    },

    {
        id: 2,
        img: "./images/noticias/suikoden-300x300.jpg",
        span: "8",
        subtitle: "translated for all languages",
        title: "Suikoden 1&2 HD Remaster announced for 2023",
        info: "The remastering will bring new features such as autosave system, automatic battles or a record of conversations.",
        date: "September 16, 2022",
        author: "Lauren Drake",
    },
    {
        id: 3,
        img: "./images/articulos/stray-destacada-300x300.jpg",
        span: "5",
        subtitle: "Nice, but far from purrfect",
        title: "Stray: A Cat Adventure",
        info: "An entertaining adventure of exploration, platforms and puzzles with good rhythm, but little original and with an important asterisk: the protagonist is not the cat.",
        date: "September 16, 2022",
        author: "Dalinar Kholin",
    },
    {
        id: 4,
        img: "./images/noticias/state-of-play-jueves-d-300x300.jpg",
        span: "12",
        subtitle: "Tekken 8, God of War, Stellar Blade and a few others",
        title: "All games announced in the State of Play",
        info: "In the absence of a PlayStation Showcase and a couple of absences that some might miss, Sony showed a few little games overshadowed by an ending with God of War Ragnarök.",
        date: "September 14, 2022",
        author: "Ellen Ripley",
    },
    {
        id: 5,
        img: "./images/noticias/Octopath-Traveler-II-300x300.jpg",
        span: "7",
        subtitle: "On PC, Switch and PlayStation",
        title: "Octopath Traveler II will be released on February 24, 2023",
        info: "Square Enix brings us this sequel to Octopath Traveler with a very similar premise in its essence: we will live the adventure of eight new travelers whose stories will end up crossing.",
        date: "September 13, 2022",
        author: "Arthur Morgan",
    },
    {
        id: 7,
        img: "./images/noticias/the-legend-of-zelda-tears-of-the-kingdom-300x300.jpg",
        span: "34",
        subtitle: "God Save the Kingdom",
        title: "The Legend of Zelda: Tears of The Kingdom will be released on May 12, 2023",
        info: "The sequel to Breath of the Wild finally takes us out of doubt with its name and its release date.",
        date: "September 13, 2022",
        author: "Ellen Ripley",
    },
    {
        id: 6,
        img: "./images/noticias/direct-13-septiembre-300x300.jpg",
        span: "17",
        subtitle: "Praying to Hylia",
        title: "At 16:00h – Follow the Nintendo Direct here",
        info: "With 40 minutes of event, they will tell us information focused mainly on games for Nintendo Switch that will arrive this winter.",
        date: "September 13, 2022",
        author: "Brandon Sanderson",
    },
    /*{
        id: 7,
        img: "",
        span: "",
        subtitle: "",
        title: "",
        info: "",
        date: "",
        author: "",
    },*/
];
/* entrada de artículos dinamicos */
const paginationContent = document.querySelector('.pagination__content');

window.addEventListener('DOMContentLoaded', function(){
    let displayContent = articles.map(function(item){
        
        return `<article class="front-page__left left__firts" id="post">
        <img src="${item.img}" alt="${item.title}" class="entry__img">
        <div class="entry__container">
            <span class="entry__number">${item.span}</span>
            <header class="entry__header">
                <h3 class="entry__subtitle">${item.subtitle}</h3>
                <h2 class="entry__title">${item.title}</h2>
            </header>
            <div class="entry__info">
                <p>${item.info}</p>
            </div>
            <footer class="entry__footer">
                <div class="entry__date">${item.date}</div>
                <div class="entry__author">
                    <span class="entry__pre-author">by</span>
                     ${item.author}
                </div>
            </footer>
        </div>
    </article>`;
    });
    displayContent = displayContent.join('');
    paginationContent.innerHTML = displayContent;
});

const articles2 = [
    {
        id: 1,
        img: "./images/noticias/Return-to-Monkey-Island--300x300.jpg",
        span: "15",
        subtitle: "New games, same debates",
        title: "Monkey Island, Hegel and Progress",
        info: "Is the visual section of Return to Monkey Island a setback or an involution for the franchise?, is there a destination in the form of the graphic representation of the video game?",
        date: "September 11, 2022",
        author: "Arthur Morgan",
    },

    {
        id: 2,
        img: "./images/noticias/uncharted-legado-ladrones-arte-300x300.jpg",
        span: "4",
        subtitle: "Ok computer",
        title: "Uncharted: Legacy of thieves will be released on PC on October 19",
        info: "A new PlayStation-to-PC port, the last one expected this year, is coming to Steam and the Epic Games Store next month.",
        date: "September 10, 2022",
        author: "Lauren Drake",
    },
    {
        id: 3,
        img: "./images/noticias/Like-a-Dragon-Gaiden-The-Man-Who-Erased-His-Name-300x300.jpg",
        span: "37",
        subtitle: "And new trailer for Like a Dragon Ishin",
        title: "RGG Studio presents Like a Dragon 8 and Like a Dragon Gaiden during it's event",
        info: "The RGG Summit 2022 has come strong with these three big announcements, which will mark the near future of the Yakuza saga and its spin-offs.",
        date: "September 09, 2022",
        author: "Dalinar Kholin",
    },
    {
        id: 4,
        img: "./images/noticias/rise-ronin-anuncio-300x300.jpg",
        span: "10",
        subtitle: "For PC and PS5... in 2024",
        title: "Rise of the Ronin is Team Ninja's new open-world RPG",
        info: "The next koei Tecmo and Nioh team mix katanas and pistols in late nineteenth-century Japan.",
        date: "September 09, 2022",
        author: "Samuel Daniels",
    },
    {
        id: 5,
        img: "./images/noticias/pikmin-4-300x300.jpg",
        span: "6",
        subtitle: "I was partying",
        title: "Pikmin 4 coming to Switch in 2023",
        info: "After five years without news about Pikmin 4 it seems that it will finally come true, although at the moment we have not seen gameplay of the game.",
        date: "September 08, 2022",
        author: "Arthur Morgan",
    },
    {
        id: 7,
        img: "./images/noticias/splatoon-3-ventas-300x300.jpg",
        span: "14",
        subtitle: "Spectacular",
        title: "Splatoon 3 sells 3.45 million copies in Japan in tree days",
        info: "With this figure it becomes the best Switch premiere in Japan, well ahead of Animal Crossing: New Horizons (1.8 million) or Pokémon Legends: Arceus (1.42).",
        date: "September 07, 2022",
        author: "Ellen Ripley",
    },
    {
        id: 6,
        img: "./images/noticias/Ubisoft-300x300.jpg",
        span: "2",
        subtitle: "Compulsive shopper",
        title: "Tencent increases its investment in Ubisoft by acquiring 49.9% of Guillemot Brothers Limited",
        info: "Tencent has invested €300 million in GBL, which will allow them to increase their stake to almost 10% of Ubisoft.",
        date: "September 07, 2022",
        author: "Brandon Sanderson",
    },
    {
        id: 7,
        img: "./images/noticias/deltarune2-op-300x300.jpg",
        span: "16",
        subtitle: "But there is an anniversary surprise",
        title: "The next chapters of Deltarune will not come out until at least 2023",
        info: "To compensate, Toby Fox has announced that next week he has something special planned to commemorate the anniversary of his second chapter.",
        date: "September 06, 2022",
        author: "Lauren Drake",
    },
    {
        id: 8,
        img: "./images/noticias/image-cyberpunk-300x300.jpg",
        span: "11",
        subtitle: "1.0",
        title: "Cyberpunk 2077: Phantom Liberty will be released in 2023 for new generation and PC",
        info: "They have also taken the opportunity to announce Edgerunners, a patch inspired by the Cyberpunk anime and that will be the last to reach the last generation.",
        date: "September 05, 2022",
        author: "Navani Kholin",
    },
    {
        id: 9,
        img: "./images/noticias/mario-kart-tour-300x300.jpg",
        span: "3",
        subtitle: "No more pipes",
        title: "Nintendo to remove Mario Kart Tour loot boxes later this month",
        info: "With their removal, they will incorporate a new store that will rotate their items over time, and will allow users to know what they spend their money on.",
        date: "September 05, 2022",
        author: "Brandon Sanderson",
    },
];

const paginationContent2 = document.querySelector('.pagination__content-2');

window.addEventListener('DOMContentLoaded', function(){
    let displayContent = articles2.map(function(item){
        
        return `<article class="front-page__left left__firts" id="post">
        <img src="${item.img}" alt="${item.title}" class="entry__img">
        <div class="entry__container">
            <span class="entry__number">${item.span}</span>
            <header class="entry__header">
                <h3 class="entry__subtitle">${item.subtitle}</h3>
                <h2 class="entry__title">${item.title}</h2>
            </header>
            <div class="entry__info">
                <p>${item.info}</p>
            </div>
            <footer class="entry__footer">
                <div class="entry__date">${item.date}</div>
                <div class="entry__author">
                    <span class="entry__pre-author">by</span>
                     ${item.author}
                </div>
            </footer>
        </div>
    </article>`;
    });
    displayContent = displayContent.join('');
    paginationContent2.innerHTML = displayContent;
});
