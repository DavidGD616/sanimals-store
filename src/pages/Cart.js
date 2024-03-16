import React from "react";
import { PageWidth } from '../components/PageWidth';
import { Header } from "../containers/Header";
import { Announcement } from "../components/Announcement";
import { Footer } from "../containers/Footer";
import { Button, Divider, Link } from "@nextui-org/react";
import { Reducer } from "../svg/Reducer";
import { Increaser } from "../svg/Increaser";

function Cart() {
    return (
        <>
            <Announcement />
            <PageWidth>
                <Header />
                <section>
                    <div className="mt-10 mb-6">
                        <h1 className="text-3xl md:text-4xl font-medium">Your Cart</h1>
                    </div>
                    <div>
                        <table className="mt-6 w-full border-collapse divide-y">
                            <thead className="whitespace-nowrap text-left">
                                <tr>
                                    <th className="text-sm text-[#656F7E] p-4">PRODUCT</th>
                                    <th className="text-sm text-[#656F7E] p-4">QUANTITY</th>
                                    <th className="hidden md:block text-sm text-[#656F7E] p-4">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody className="whitespace-nowrap divide-y">
                                <tr>
                                    <td className="py-6 px-4">
                                        <div className="flex items-center gap-6 w-max">
                                            <div className="h-36 shrink-0">
                                                <img src="#" alt="product" className="w-full h-full object-contain border-2" />
                                            </div>
                                            <div>
                                                <p className="text-md font-medium text-[#333]">Black T-Shirt</p>
                                                <p className="text-sm font-normal text-[#333]">$32</p>
                                                <p className="text-sm font-normal text-[#333]">Size: M</p>
                                                <Link href="#" color="danger" className="mt-4 font-semibold text-sm">
                                                    Remove
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-6 px-4">
                                        <div className="flex divide-x border w-max">
                                            <Button 
                                            isIconOnly
                                            radius="none" 
                                            className="bg-gray-100 px-4 py-2 font-semibold">
                                               <Reducer className='p-0' width={12} /> 
                                            </Button>
                                            <input type="number" 
                                            className="bg-transparent px-2 font-semibold text-[#333] text-md w-10"
                                            >
                                            </input>
                                            <Button
                                            isIconOnly
                                            radius="none"
                                            className="bg-gray-800 text-white px-4 py-2 font-semibold"
                                            >
                                                <Increaser size={12} /> 
                                            </Button>
                                        </div>
                                    </td>
                                    <td className="hidden md:block py-6 px-4">
                                        <h4 className="text-md font-bold text-[#333]">$18.50</h4>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                            <Divider className=" my-8" />
                            <div className="flex justify-between lg:justify-end lg:items-end
                            lg:flex-col-reverse items-center py-6 px-4">
                                <div className="flex flex-col lg:justify-end lg:items-end">
                                    <label className="text-lg text-[#333]">SUBTOTAL</label>
                                    <label className="text-xs md:text-base text-[#656F7E]">
                                        Taxes and shipping calculated at checkout
                                    </label>
                                </div>
                                <h4 className="text-lg font-bold text-[#333]">$18.50</h4>
                            </div>
                            <div className="w-full md:flex md:justify-end mt-2 mb-16 py-2 px-4">
                                <Button
                                radius="sm"
                                className="w-full h-16 md:w-5/12 lg:w-72 bg-black text-base text-white font-bold tracking-widest">
                                    Check-Out
                                </Button>
                            </div>
                    </div>
                </section>
            </PageWidth>
            <Footer />
        </>
    )
}

export { Cart }

