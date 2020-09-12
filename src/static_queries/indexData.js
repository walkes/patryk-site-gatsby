import { graphql, useStaticQuery } from "gatsby";

export function mainData() {
    return useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "/content/images/foto_patryk.png" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`)
}