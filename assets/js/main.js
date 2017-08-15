;
(function(window) {

    'use strict';

    function init() {
        loadLogo();
        navigate();
        loadStaticContent();

        if (!location.hash) {
            location.hash = "#home";
        }
        addEventListener("hashchange", navigate);
    }

    function loadLogo() {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        /* HEAD */
        ctx.beginPath();
        ctx.strokeStyle = "#000";
        ctx.lineCap = "round";
        ctx.lineWidth = "100";
        ctx.arc(300, 250, 50, 0, 2 * Math.PI);
        ctx.transform(1, 0, 0, 1, 1, -2);
        ctx.stroke();
        /* Ear Left */
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.transform(1, 0.09, 0.05, 1, 0, 0);
        ctx.lineCap = "round";
        ctx.lineWidth = "100";
        ctx.arc(168, 130, 50, 0, 2 * Math.PI);
        ctx.stroke();
        /* Ear Right */
        ctx.beginPath();
        ctx.transform(1, -0.09, -0.16, 1, 1, 0);
        ctx.lineCap = "round";
        ctx.lineWidth = "100";
        ctx.arc(440, 140, 50, 0, 2 * Math.PI);
        ctx.stroke();
        /* Mouth */
        ctx.beginPath();
        ctx.transform(1.65, -0.01, 0.11, 1.52, 1, 0);
        ctx.lineTo(137.9, 175);
        ctx.strokeStyle = "white";
        ctx.arc(188, 175, 50, 0, 1 * Math.PI);
        ctx.lineCap = "round";
        ctx.lineWidth = "10";
        ctx.stroke();
        /* Eye Right */
        ctx.beginPath();
        ctx.transform(1, -0.01, 0.23, 1, 1, 0);
        ctx.strokeStyle = "white";
        ctx.arc(186, 136, 8, 0, 2 * Math.PI);
        ctx.lineCap = "round";
        ctx.lineWidth = "18";
        ctx.stroke();
        /* Eye left */
        ctx.beginPath();
        ctx.transform(1, -0.16, -0.15, 1, 1, 0);
        ctx.strokeStyle = "white";
        ctx.arc(140, 157, 8, 0, 2 * Math.PI);
        ctx.lineCap = "round";
        ctx.lineWidth = "18";
        ctx.stroke();
        /* BG Mouth */
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.transform(1, 0.17, 0.03, 1, 0, 0);
        ctx.fillRect(120, 180, 96, 20);
        ctx.transform(1, -0.001, -0.03, 1, 0, 0);
        ctx.fillRect(135, 199, 78, 15);
        ctx.transform(1, -0.001, -0.03, 1, 0, 0);
        ctx.fillRect(154, 210, 50, 12);
        ctx.stroke();
    }

    function getContent(fragmentId) {
        let partials = {
            home: `<section id="channel" class="bg bg-four">
                        <div class="container">
                            <div class="section-content">
                                <div class="grid-12 center">
                                    <h1>Enjoy our channels</h1>
                                    <p>Music is our drug and the Dj is our dealer</p>
                                </div>
                                <div class="grid-12 channel-available">
                                    <video autoplay loop muted>
                                            <source src="assets/video/trailer.mp4" type="video/mp4">
                                            <source src="assets/video/trailer.ogg" type="video/ogg">
                                            <source src="assets/video/trailer.webm" type="video/webm">
                                        </video>
                                </div>
                                <div class="grid-12 center">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                                        <li><a href="#"><i class="fa fa-vimeo-square"></i></a></li>
                                        <li><a href="#"><i class="fa fa-soundcloud"></i></a></li>
                                        <li><a href="#"><i class="fa fa-spotify"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>`,
            about: `<section id="bio" class="bg bg-two">
                        <div class="container">
                            <div class="section-content">
                                <div class="grid-12 center">
                                    <h1>About</h1>
                                </div>
                                <div class="grid-12 profile">
                                    <div class="grid-6 left">
                                        <p>Joel Zimmerman the dance music phenomenon from Toronto, better known as deadmau5, rolls his eyes at the description which he sees as a hopelessly outdated way of describing what he does. His tracks have been included in numerous compilation
                                            albums, such as the 2007 In Search of Sunrise 6: Ibiza CD. The February 2008 issue of Mixmag's music magazine included a free CD which was titled MixMag Presents: The Hottest New Name In Dance! DEADMAU5 Tech-Trance-Electro-Madness.</p>
                                    </div>
                                </div>
                                <div class="grid-3 bounce left">
                                    <a href="#music">What new's</i></a>
                                </div>
                            </div>
                    </section>`,
            music: `<section id="category" class="bg bg-three">
                        <div class="container">
                            <div class="section-content">
                                <div class="grid-12 center">
                                    <h1>Dancefloor</h1>
                                    <p>God is a Dj life is a dancefloor love is the rhythm you are music</p>
                                </div>
                                <div class="grid-12 group center">
                                    <div class="grid-6">
                                        <div class="type">
                                            <i class="fa fa-star icon"></i>
                                            <h2>Techno</h2>
                                            <p>Developments in the Detroit scene led to the opening of a nightclub called the Music Institute</p>
                                        </div>
                                    </div>
                                    <div class="grid-6">
                                        <div class="type">
                                            <i class="fa fa-star icon"></i>
                                            <h2>House</h2>
                                            <p>House music created by club DJs and music producers in Chicago in the early 1980s.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-12 bounce center">
                                    <a href="#channel">Listen Now !</a>
                                </div>
                            </div>
                    </section>`,
        };
        return partials[fragmentId];
    }

    function navigate() {
        let contentDiv = document.getElementById("content"),
            fragmentId = location.hash.substr(1);
        contentDiv.innerHTML = getContent(fragmentId);
    }

    function dataStorage() {
        let musicalGenre = window.localStorage.getItem(musicalGenre);
        let title_home = window.localStorage.getItem(title_home);

        if (!music) {
            let musicalGenre = [
                { name: 'techno', description: 'Developments in the Detroit scene led to the opening of a nightclub called the Music Institute' },
                { name: 'house', description: 'House music created by club DJs and music producers in Chicago in the early 1980s' }
            ];

            let title_home = [
                { description: 'Friends, the wait is finally over... is available to get everywhere!.' }
            ];

            window.localStorage.setItem('musicalGenre', JSON.stringify(musicalGenre));
            window.localStorage.setItem('title_home', JSON.stringify(title_home));
            console.log('ahdjfad')

        } else {

            musicalGenre = JSON.parse(window.localStorage.getItem(musicalGenre));
            title_home = JSON.parse(window.localStorage.getItem(title_home));

        }

    }

    function loadStaticContent() {

        /* Logo Name */
        let title_logo = document.querySelector('#title__logo');
        let tag__logo = document.createElement('h1');
        tag__logo = document.createTextNode('Deadmau5');
        title_logo.appendChild(tag__logo);

        /* Header Title */
        let title_header = document.querySelector('#title__header');
        let tag__title = document.createElement('h1');
        tag__title = document.createTextNode('friends, the wait is finally over... is available to get everywhere!');
        title_header.appendChild(tag__title);

        /* Header Tour */
        let title_tour = document.querySelector('#tour');
        let tag__tour = document.createElement('a');
        tag__tour = document.createTextNode('Take a Tour');
        title_tour.appendChild(tag__tour);

        /* Footer text */
        let name__footer = document.querySelector('#name__footer');
        let tag__name__footer = document.createElement('p');
        tag__name__footer = document.createTextNode('Deadmau5 live !');
        name__footer.appendChild(tag__name__footer);

        /* Footer text */
        let copy__footer = document.querySelector('#copyright');
        let tag__copy__footer = document.createElement('p');
        tag__copy__footer = document.createTextNode('Copyright 2017');
        copy__footer.appendChild(tag__copy__footer);

    }

    init();

})(window);