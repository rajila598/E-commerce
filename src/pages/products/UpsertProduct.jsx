import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_API_URL } from "../../constants/domain";

const UpsertProduct = () => {
    const { _id } = useParams();
    // const [name, setName] = useState("")

    let initialValue = {
        name: "",
        price: "",
        description: "",
        in_stock: "",
        categories: [""],
        image: null,
    };
    const [data, setData] = useState(initialValue);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    useEffect(() => {
        if (_id) {
            axios
                .get(`${VITE_API_URL}/products/${_id}`)
                .then((res) => {
                    setData(res.data.data);
                })
                .catch((err) => {
                    toast.error("something is wrong");
                });
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        let access_token = localStorage.getItem("access_token");
        let formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("description", data.description);
        formData.append("image", data.image);
        data.categories.forEach((cat) => {
            formData.append("categories", cat);
        });
        
        setIsSubmitting(true);
        let url = `${VITE_API_URL}/products`;
        let method = "post";
        if (_id) {
            method = "put";
            url = `${VITE_API_URL}/products/` + _id;
        }
        axios[method](url, formData, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })
            .then((res) => {
                setIsSubmitting(false);
                toast("product created.");
                setData(initialValue);
            })
            .catch((err) => {
                setIsSubmitting(false);
                if (err.response?.status == 400) {
                    let errObj = {};
                    err.response.data.errors.forEach((el) => {
                        errObj[el.param] = el.msg;
                    });
                    setValidationErrors(errObj);
                }
                toast.error("something wornd");
            });
    };
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: 
            e.target.type == "file" ? e.target.files[0]: e.target.value,
        });
    };
    const handleCategoryChange = (e, index) => {
        let temp = data.categories.map((el, idx) => {
            if (index == idx) {
                return e.target.value;
            }
            return el;
        });
        setData({
            ...data,
            categories: temp,
        });
    };
    const addCategory = (el) => {
        let temp = [...data.categories];
        temp.push("");
        setData({ ...data, categories: temp });
    };
    const deleteCategory = (index) => {
        let temp = [...data.categories];
        temp.splice(index, 1);
        setData({
            ...data,
            categories: temp,
        });

        toast("deleted");
    };
    let categories = ["one", "two", "three"];
    return (
        <>
            <div className="container max-w-[600px] bg-white shadow-lg">
                <form action="" className="p-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="form">
                            <label
                                htmlFor="name"
                                className="form-label required-field"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                            />
                            {validationErrors && (
                                <span className="text-sm text-red-500">
                                    {validationErrors.name}
                                </span>
                            )}
                        </div>
                        <div className="form">
                            <label
                                htmlFor="name"
                                className="form-label required-field"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                value={data.price}
                                onChange={handleChange}
                            />
                            {validationErrors && (
                                <span className="text-sm text-red-500">
                                    {validationErrors.price}
                                </span>
                            )}
                        </div>
                        <div className="form">
                            <label
                                htmlFor="name"
                                className="form-label required-field"
                            >
                                InStock
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                name="in_stock"
                                value={data.in_stock}
                                onChange={handleChange}
                            />
                            {validationErrors && (
                                <span className="text-sm text-red-500">
                                    {validationErrors.in_stock}
                                </span>
                            )}
                        </div>
                        <div className="form">
                            <label htmlFor="name" className="form-label">
                                Description
                            </label>
                            <textarea
                                type="text"
                                className="form-control"
                                name="description"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form">
                            <div className="flex gap-4">
                                <label
                                    htmlFor="categories"
                                    className="form-label"
                                >
                                    Category
                                </label>
                                <button
                                    type="button"
                                    className="btn-sm-pink"
                                    onClick={addCategory}
                                >
                                    Add
                                </button>
                            </div>
                            {data.categories.map((el, index) => {
                                return (
                                    <div className="flex" key="el._id">
                                        <input
                                            type="text"
                                            value={el}
                                            className="form-control"
                                            name="category"
                                            onChange={(e) => {
                                                handleCategoryChange(e, index);
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="btn-pink"
                                            onClick={() => {
                                                deleteCategory(index);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="form">
                            <label htmlFor="name" className="form-label">
                                Image
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                name="image"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        [e.target.name]:
                                            e.target.type == "file"
                                                ? e.target.files[0]
                                                : e.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            disabled={isSubmitting}
                            className="btn-pink mt-3 disabled:opacity-50 disabled:cursor-no-drop"
                        >
                            {isSubmitting ? "Loading..." : _id ? "Edit Product" : "Add Product"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpsertProduct;
