import howdy from "../assets/howdyCat.JPG";

function Home() {

    return (
        <div id="home">
            <h1>
            <span className="headerText">Cat Shelter</span>
            <div className="twirlyCat">
                <img src={howdy} className="appLogo" alt="kitty" />
            </div>
            <span className="normalText">
                A React App for Furry Feline Friends
            </span>
            </h1>

            {/* <form onSubm>
            <label htmlFor="name"></label>
                <input type="text" id="text" placeholder="Text" value={text} onChange={e => (e.target.value)} />
                
                <button type="submit">Click Me!</button>
            </form>
         */}
        </div>
    );
}

export default Home;

// • Add a controlled form that includes:
//  ◦ A text input
//  ◦ A button with the text of “Click Me!”
//  ◦ A paragraph that has a counter that starts at 0
//  • When they input and submit text in the text field, the text input should reset. At the same time the counter should increment based on the word length.
//  • The counter will continue to increment based on word length and will never reset back to zero. So for example: if the student typed in hi and submitted 3 times, the counter would be at 6.