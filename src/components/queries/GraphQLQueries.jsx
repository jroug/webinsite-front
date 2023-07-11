const homePage_SLUG = "homepage";
const aboutPage_SLUG = "about";
const sectionOurServices_SLUG = "sectionourservices";
const sectionWhyUs_SLUG = "sectionwhyus";
const sectionAboutUs_SLUG = "sectionaboutus";

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
            }
            componentsSectionsAllPages{
              componentsSections {
                ... on Component {
                  title
                }
              }
            }
        }`,
        aboutPage:`aboutPage: page( id: "${aboutPage_SLUG}", idType: URI ) {
            id
            title
            content
            componentsSectionsAllPages{
              componentsSections {
                ... on Component {
                  title
                }
              }
            }
        }`,
        sectionAboutUs:`sectionAboutUs: component( id: "${sectionAboutUs_SLUG}", idType: URI ) {
            id
            title
            sectionAboutUsFields{
              smallTitleTop
              mainTitle
              mainText
              personName
              personTitle
              personImage{
                sourceUrl
              }
              mainImage{
                sourceUrl
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
                boxLink
              }
              box2 {
                boxIconClass
                boxTitle
                boxText
                boxLink
              }
              box3 {
                boxIconClass
                boxTitle
                boxText
                boxLink
              }
              box4 {
                boxIconClass
                boxTitle
                boxText
                boxLink
              }
              box5 {
                boxIconClass
                boxTitle
                boxText
                boxLink
              }
            }
        }
        `,
        sectionWhyUs:`sectionWhyUs: component( id: "${sectionWhyUs_SLUG}", idType: URI ) {
          id
          title
          sectionWhyUsFields{
            smallTitleTop
            mainTitle
            mainSubTitle
            featuresTitle
            features
            featuresButtonText
            featuresButtonLink
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
          }
      }
      `,
    }
};
export default GraphQLQueries;