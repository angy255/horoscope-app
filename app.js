// conditional
// if h1 = aquarius / class/ id
// then use javascript to update zodiac based on persons info

// if month = 3
// day >= 31
// return aries

//comments above are my own...just brainstorming with an EIR how I wanted to approach writing the code to make sure it functions how it's meant to


//this code below may look similar or exact to others because we worked at a table, group of approx 4 of us trying to get the code to behave the way we wanted
//so we created one big function to adhere to specific dates and respond with specific zodiacs/innerText
document.querySelector('button').addEventListener('click', birthday)

function birthday(){
    const input = (document.querySelector('#month').value).toLowerCase();
    const date = Number(document.querySelector('#day').value);

    console.log(input)
    if ((input==='december'&&(date>22 || date<=31)) || (input=== 'january' &&(date>=1 || date<=19))){
        document.querySelector('p').innerText='♑ Capricorn';
    
    }else if ((input==='january'&&(date>20 || date<=31)) || (input=== 'february' &&(date>=1 || date<=18))){
        document.querySelector('p').innerText='♒ Aquarius';

    }else if ((input==='february'&&(date>19 || date<=28)) || (input=== 'march' &&(date>=1 || date<=20))){
        document.querySelector('p').innerText='♓ Pisces 🐟';

    }else if ((input==='march'&&(date>21 || date<=31)) || (input=== 'april' &&(date>=1 || date<=19))){
        document.querySelector('p').innerText='♈ Aries';

    }else if ((input==='april'&&(date>20 || date<=30)) || (input=== 'may' &&(date>=1 || date<=20))){
        document.querySelector('p').innerText='♉ Taurus';

    }else if ((input==='may'&&(date>21 || date<=31)) || (input=== 'june' &&(date>=1 || date<=20))){
        document.querySelector('p').innerText='♊ Gemini';

    }else if ((input==='june'&&(date>21 || date<=30)) || (input=== 'july' &&(date>=1 || date<=22))){
        document.querySelector('p').innerText='♋ Cancer';

    }else if ((input==='july'&&(date>23 || date<=31)) || (input=== 'august' &&(date>=1 || date<=22))){
        document.querySelector('p').innerText='♌ Leo';

    }else if ((input==='august'&&(date>23 || date<=31)) || (input=== 'september' &&(date>=1 || date<=22))){
        document.querySelector('p').innerText='♍ Virgo';

    }else if ((input==='september'&&(date>23 || date<=30)) || (input=== 'october' &&(date>=1 || date<=22))){
        document.querySelector('p').innerText='♎ Libra';

    }else if ((input==='october'&&(date>23 || date<=31)) || (input=== 'november' &&(date>=1 || date<=21))){
        document.querySelector('p').innerText='♏ Scorpio';

    }else if ((input==='november'&&(date>22 || date<=30)) || (input=== 'december' &&(date>=1 || date<=21))){
        document.querySelector('p').innerText='♐ Sagittarius';

    }else document.querySelector('p').innerText='That\'s not your birthday, is it?!?';

}

// consider a drop down menu for the month and day look at code examples for that
//this comment is me considering adding an input type=date since it turns out, this nifty elementcould replace the day and 
// month input type we had created https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/date
//however since we went through the time of creating the function above, I decided to keep what was already created
// and just add this as a comment for potential future use
