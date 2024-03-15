import React from "react";
import { PageWidth } from '../components/PageWidth';
import { Header } from "../containers/Header";
import { Announcement } from "../components/Announcement";

function Cart() {
    return (
        <>
            <Announcement />
            <PageWidth>
                <Header />
            </PageWidth>
        </>
    )
}

export { Cart }