const AddProducts = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let productData = {}
    }
    return (
        <>
            <div className="container w-[600px] bg-white shadow-lg">
                <form action="" className="p-6">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="form">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                            />
                        </div>
                        <div className="form">
                            <label htmlFor="name" className="form-label">
                                Price
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                            />
                        </div>
                        <div className="form">
                            <label htmlFor="name" className="form-label">
                                InStock
                            </label>
                            <input
                                type="numbert"
                                className="form-control"
                                name="stock"
                            />
                        </div>
                        <div className="form">
                            <label htmlFor="name" className="form-label">
                                Description
                            </label>
                            <textarea
                                type="text"
                                className="form-control"
                                name="stock"
                            />
                        </div>
                        <div className="form">
                            <label htmlFor="name" className="form-label">
                                Image
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                name="stock"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="btn-pink mt-3">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProducts;
