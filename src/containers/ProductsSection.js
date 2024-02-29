import React from "react";
import { Card, CardBody, CardFooter, Image} from "@nextui-org/react";


function ProductsSection({ products }) {
    return (
        <>
        <h1 className="text-4xl font-bold text-center my-12">All Products</h1>
        <div className="gap-8 grid grid-cols-2 sm:grid-cols-4 mb-[5em]">
            {products.map((product, index) => (
                <Card
                className="rounded-lg shadow-sm"
                 shadow="sm" key={index}
                 isPressable
                 onPress={() => console.log("product pressed")}>
                    <CardBody className="overflow-visible p-0">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={product.title}
                            className="w-full object-contain h-[200px]"
                            src={product.images[0]}
                        />
                    </CardBody>
                    <CardFooter className="h-24 text-small justify-between
                    bg-[#FEEFFF] rounded-lg">
                        <b>{product.title}</b>
                        <p className="text-default-500">{product.price}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
        </>
    )
}

export { ProductsSection }