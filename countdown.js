        // Zielzeit: 31. Dezember 2025 um 24:00
        const targetDate = new Date("December 31, 2025 23:59:59").getTime();

        // Funktion, um den Countdown zu starten
        function startCountdown() {
            let countdownInterval = setInterval(function() {
                // Aktuelle Zeit
                let now = new Date().getTime();

                // Berechne die verbleibende Zeit
                let distance = targetDate - now;

                // Berechne Tage, Stunden, Minuten und Sekunden
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Zeige die verbleibende Zeit im Format: Tage:Stunden:Minuten:Sekunden ohne Bezeichner
                document.getElementById('timer').textContent = 
                    (days < 10 ? '0' : '') + days + ":" + 
                    (hours < 10 ? '0' : '') + hours + ":" + 
                    (minutes < 10 ? '0' : '') + minutes + ":" + 
                    (seconds < 10 ? '0' : '') + seconds;

                // Wenn der Countdown abgelaufen ist
                if (distance < 0) {
                    clearInterval(countdownInterval);
                    document.getElementById('timer').textContent = "Das Ziel ist erreicht!";
                }
            }, 1000); // Update alle 1 Sekunde
        }

        // Starte den Countdown
        startCountdown();
