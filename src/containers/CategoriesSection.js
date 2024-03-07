import React from "react";
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";
import { Link } from "react-router-dom";

function CategoriesSection({ categories }) {
    return (
        <section>
            <h1 className="my-8 text-center text-3xl font-semibold text-gray-800 lg:text-4xl">
                Our Collections
            </h1>
            <div className="my-32 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 lg:gap-8">
                {categories.map((categorie, index) => (
                    <Card radius="sm" key={index} shadow="none" isPressable className="bg-[#FEEFFF] p-8">
                        <CardHeader>
                            <h2 className="text-2xl text-gray-800 font-bold">{categorie.name}</h2>
                        </CardHeader>
                        <CardBody>
                            <Image
                            className="mt-8 flex items-center justify-center md:mt-24"
                            alt={categorie.title}
                            src={categorie.image}
                            />
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export { CategoriesSection }