import React, { ReactElement } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

interface Page {
    title: string;
    href: string;
}

interface HeaderProps {
    title: string;
    rootUrl: string;
    currentUrl: string;
    backgroundImage: string;
    pages: Page[];
}

export default function Header(props: HeaderProps) {
    const { currentUrl, rootUrl, title, pages } = props;
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "foto_patryk.png" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }`)

    return (
        <BackgroundImage
            Tag="header"
            className={currentUrl === rootUrl ? "main-hero" : ""}
            fluid={data.file.childImageSharp.fluid}
            backgroundColor={`#040e18`}>
            <div className="container text-center text-md-left">
                <h5>
                    <Link to="/">{title}</Link>
                </h5>
                <nav>
                    <ul>
                        {pages.map(page =>
                            <li>
                                <Link to={page.href} className={currentUrl === page.href ? "active" : ""}>
                                    {page.title}
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </BackgroundImage>
    );
}