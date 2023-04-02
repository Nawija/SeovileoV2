// Logic exports
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import {
    HeroComponent,
    CardsComponent,
    IphoneComponent,
    WhyGatsbyComponent,
    CompaniesComponent,
    QandA,
} from "../components/index/indexComponents";

const IndexPage = () => {
    return (
        <Layout>
            <HeroComponent />
            <CardsComponent />
            <IphoneComponent />
            <WhyGatsbyComponent />
            <CompaniesComponent />
            <QandA />
        </Layout>
    );
};

export const Head = () => <Seo title="Seovileo" />;

export default IndexPage;
