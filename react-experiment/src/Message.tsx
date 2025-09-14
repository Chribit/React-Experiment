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
    key : number;
    message : MessageT;
}

function Message ({ key, message } : MessageProps)
{
    return(
        <li
            key={key}
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
