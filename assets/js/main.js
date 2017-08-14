;
(function(window) {

    'use strict';

    function init() {
        loadLogo();
    }

    function loadLogo() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
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

    function dataStorage() {
        var musicalGenre = window.localStorage.getItem(music);
        if (!localStorage) {
            var musical = [
                { name: 'Techno', description: 'evelopments in the Detroit scene led to the opening of a nightclub called the Music Institute' },
                { name: 'House', description: 'House music created by club DJs and music producers in Chicago in the early 1980s.' },
            ]
            window.localStorage.setItem('musicalGenre', JSON.stringify);
        } else {
            musicalGenre = JSON.parse(window.localStorage.getItem(musicalGenre));
        }

        document.addEventListener('DOM', function() {
            console.log()
        });
    }

    init();

})(window);