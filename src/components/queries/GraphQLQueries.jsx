const homePage_SLUG = "homepage";
const sectionOurServices_SLUG = "sectionourservices";


// when appolo sends to backend it adds __typename field to help with cache
// so when adding allowed queris on backend need to add that query
// you can find it in the ajax request header

const GraphQLQueries = {
    queries : {
        homePage:`homePage: page( id: "${homePage_SLUG}", idType: URI ) {
            id
            title
            content
            homepageFields{
                heroImage { sourceUrl }
                heroImageOverlay { sourceUrl }
                heroTitle
                heroSubTitle
                heroButtonText
                heroButtonUrl
                componentsSections {
                    ... on Component {
                      title
                    }
                }
            }
        }`,
        sectionOurServices:`sectionOurServices: component( id: "${sectionOurServices_SLUG}", idType: URI ) {
            id
            title
            sectionOurServicesFields{
              smallTitleTop
              mainTitle
              box1 {
                boxIconClass
                boxTitle
                boxText
              }
              box2 {
                boxIconClass
                boxTitle
                boxText
              }
              box3 {
                boxIconClass
                boxTitle
                boxText
              }
              box4 {
                boxIconClass
                boxTitle
                boxText
              }
              box5 {
                boxIconClass
                boxTitle
                boxText
              }
            }
        }
        `,
    }
};
export default GraphQLQueries;