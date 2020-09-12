import React from "react";

interface QuoteProps {
    content: string;
    author: string;
    source: string;
}

interface MainProps {
    quote?: QuoteProps;
    content: string;
}

export default function Main(props: MainProps) {
    return (
        <section className="main">
            <div className="container">
                <article className="content">
                    {Quote(props.quote)}
                    <p>{props.content}</p>
                </article>
            </div>
        </section>
    );
}

function Quote(quote?: QuoteProps): React.ReactElement {
    if (quote) {
        return (
            <blockquote className="blockquote text-right py-4">
                <p className="mb-0 italic">{quote.content}</p>
                <p className="blockquote-footer py-2">{quote.author}, <cite title="Source Title">{quote.source}</cite></p>
            </blockquote>
        );
    }
}
