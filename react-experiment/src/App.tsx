import { Message } from "./Message";
import type { MessageT, AuthorT } from "./Message";

function randomIndex (maximum : number)
{
    return Math.floor(Math.random() * maximum);
}

function App ()
{
    const authors : AuthorT[] = [
        { name: "Rick Sanchez", id: 0 },
        { name: "Morty Smith", id: 1 },
        { name: "Jerry Smith", id: 2 },
        { name: "Summer Smith", id: 3 },
        { name: "Beth Smith", id: 4 },
        { name: "Tammy Gueterman", id: 5 },
        { name: "Squanchy", id: 6 },
        { name: "Gene Gilligan", id: 7 },
        { name: "Andre Curtis", id: 8 },
        { name: "Birdperson Phoenixperson", id: 9 }
    ];
    const authorCount : number = authors.length;

    const messages : MessageT[] = [
        { author: authors[randomIndex(authorCount)], content: "Hello!" },
        { author: authors[randomIndex(authorCount)], content: "Hi!" },
        { author: authors[randomIndex(authorCount)], content: "Omg hello!" },
        { author: authors[randomIndex(authorCount)], content: "This is amazing!" },
        { author: authors[randomIndex(authorCount)], content: "React is so fun, holy sh*t." },
        { author: authors[randomIndex(authorCount)], content: "Look at us go!" },
        { author: authors[randomIndex(authorCount)], content: "Look at all these messages coming in, wow." },
        { author: authors[randomIndex(authorCount)], content: "This is so efficient." },
        { author: authors[randomIndex(authorCount)], content: "Someone should hire the programmers behind this!" },
        { author: authors[randomIndex(authorCount)], content: "Absolutely." },
        { author: authors[randomIndex(authorCount)], content: "Agreed!" },
        { author: authors[randomIndex(authorCount)], content: "Hello world!" },
        { author: authors[randomIndex(authorCount)], content: "Is this a project initialisation or what?" },
        { author: authors[randomIndex(authorCount)], content: "What world are you talking to?!" },
        { author: authors[randomIndex(authorCount)], content: "Maybe they're just crazy..." },
        { author: authors[randomIndex(authorCount)], content: "Happens to the best of us!" },
        { author: authors[randomIndex(authorCount)], content: "I wonder how far this will all go." },
        { author: authors[randomIndex(authorCount)], content: "This is indeed fascinating." },
        { author: authors[randomIndex(authorCount)], content: "We seem to randomly change appearances..." },
        { author: authors[randomIndex(authorCount)], content: "What the hell?!" }
    ];

    return(
        <>
            <h1>Intergalactic Chat</h1>
            <ul className="messages">
                {
                    messages.map((message : MessageT) => (
                        <Message message={message} />
                    ))
                }
            </ul>
        </>
    );
}

export default App;
