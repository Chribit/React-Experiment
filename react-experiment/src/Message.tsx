import "./Message.css"

export type AuthorT = {
    name: string;
    id: number;
};

export type MessageT = {
    author: AuthorT;
    content: string;
};

type MessageProps = {
    message : MessageT
}

function randomKey ()
{
    return Math.floor(Math.random() * 999999999);
}

function Message ({ message } : MessageProps)
{
    return(
        <li
            key={randomKey()}
            className="message"
        >
            <span className="messageAuthor">{message.author.name}</span>
            <span className="messageContent">{message.content}</span>
        </li>
    );
}

export {
    Message
};
