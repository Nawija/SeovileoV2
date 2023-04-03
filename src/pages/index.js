// Logic exports
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import {
    Hero2Component,
    HeroComponent,
    CardsComponent,
    IphoneComponent,
    WhyGatsbyComponent,
    CompaniesComponent,
} from "../components/index/indexComponents";

const IndexPage = () => {
    return (
        <Layout>
            <Hero2Component />
            {/* <HeroComponent /> */}
            <CardsComponent />
            <IphoneComponent />
            <WhyGatsbyComponent />
            <CompaniesComponent />
        </Layout>
    );
};

export const Head = () => <Seo title="Seovileo" />;

export default IndexPage;
