

function title(elementName, title) {
    element = document.getElementById( elementName );
    element.style.webkitAnimationName = 'bounceIn';

    element.innerHTML = title;
}
function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time, agiatationTime;
    agiatationTime = 15;
    var audio = document.getElementById("audio");



    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        if (stepVar == 1 || stepVar == 3) {
            if (agiatationTime > 0) {
                console.log(agiatationTime );

                element.style.color = "Red";
                agiatationTime -= 1;
                audio.play();
                console.log(agiatationTime );
                if (agiatationTime == 0) {
                    agiatationTime -= 30;

                }
            }
            else {
                console.log(agiatationTime );
                element.style.color = "Black";
                audio.pause()
                agiatationTime+= 1;
                if (agiatationTime == 0) {
                    agiatationTime += 30;
                }
            }
        } else if(stepVar == 2) {
            element.style.color = "Red";
            audio.play();
            agiatationTime = 15
        } else {
            element.style.color = "Black";
            audio.pause()
            agiatationTime = 15
        }

        msLeft = endTime - (+new Date);

        if ( msLeft < 1000 ) {
            element.innerHTML = "00:00";

        } else {



            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );



        }
    }
    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}