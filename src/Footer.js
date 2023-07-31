
import React from 'react';
import './footer.css';
import SimpleReactFooter from "simple-react-footer";
import Container from 'bootstrap/dist/css/bootstrap.min.css'

class Footer extends React.Component {

    render() {
        const description = "THIS IS CAR CONFIGURATION WEBSITE WHERE U CAN CONFIGURE YOUR CAR AS YOU WANT," +
            "WE DO HAVE SO MANY TOP BRANDS FOR SURE, DO TAKE A LOOK ";
        const title = "Cars";
        const columns = [

            {
                title: "Legal",
                resources: [
                    {
                        name: "Privacy",
                        link: "/privacy"
                    },
                    {
                        name: "Terms",
                        link: "/terms"
                    }
                ]
            },
            {
                title: "Visit",
                resources: [
                    {
                        name: "Locations",
                        link: "/locations"
                    },
                    {
                        name: "Culture",
                        link: "/culture"
                    }
                ]
            }
        ];
        return <>

            <SimpleReactFooter

                description={description}
                title={title}
                columns={columns}
                linkedin="fluffy_cat_on_linkedin"
                facebook="fluffy_cat_on_fb"
                twitter="fluffy_cat_on_twitter"
                instagram="fluffy_cat_live"
                youtube="UCFt6TSF464J8K82xeA?"
                pinterest="fluffy_cats_collections"
                copyright="VITA"
                iconColor="black"
                backgroundColor=" #f2f2f2"
                fontColor="black"
                copyrightColor="black"
                margin="none!important"
                padding="none!important"
            />

        </>
    };

}


export default Footer;