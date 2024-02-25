function ProductSection() {
    return (
        <section className="productSection">
            <div className="productSection__pictures">
                <div className="productSection__pictures-1 picture-1"></div>
                <div className="productSection__pictures-2 picture-2"></div>
                <div className="productSection__pictures-3 picture-3"></div>
                <div className="productSection__pictures-4 picture-4"></div>
                <div className="productSection__pictures-5 picture-5"></div>
                <div className="productSection__pictures-6 picture-6"></div>
            </div>
            <div className="productSection__Description">
                <h1 className="productSection__Description-title">
                    365 Signature sudadera con capucha
                </h1>
                <span>
                    $75 USD
                </span>
                <div className="colorOption">
                    <label className="colorOption__color"></label>
                </div>
            </div>
        </section>
    )
}

export { ProductSection };