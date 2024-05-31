var timer = 60;
        var score = 0;
        var num;
        var bubble = document.querySelector("bubble");
        var hit;

        document.querySelector("button").addEventListener("click", function () {
            setTimeout(function () {
                makeBubbles();
                runTimer();
                updateHit();
                click();
            }, 200)
        })

        function runTimer() {

            setInterval(function () {
                if (timer > 0) {
                    timer--;
                    document.querySelector("#timerBox").textContent = timer;
                } else {
                    clearInterval(timer);
                    endTimer();
                }
            }, 1000)

        }

        function updateHit() {
            hit = Math.floor(Math.random() * 10);
            document.querySelector("#hitsBox").textContent = hit;
        }

        function makeBubbles() {
            var bubbles = "";
            for (i = 0; i < 189; i++) {
                var randomNumber = Math.floor(Math.random() * 10)
                bubbles += `<div class='bubble'>${randomNumber}</div>`;
            }
            document.querySelector("#panelBottom").innerHTML = bubbles;
        }

        function increaseScore() {
            score += 10;
            document.querySelector("#scoreBox").textContent = score;
        }

        function click() {
            var pnlbtm = document.querySelector("#panelBottom");
            pnlbtm.addEventListener("click", function (details) {
                num = Number(details.target.textContent);
                if (num === hit) {
                    increaseScore();
                    makeBubbles();
                    updateHit();
                }
            })
        }

        function endTimer() {
            document.querySelector("#panelBottom").innerHTML = `Game Over! Your score is: ${score}`;
        }