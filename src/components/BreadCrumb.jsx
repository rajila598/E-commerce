/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function BreadCrumb({ title, links }) {
    return (
        <>
            <div className="flex-center h-72 w-full bg-background">
                <div className="flex-center container flex-col items-start gap-2">
                    <p className="title text-black">{title}</p>
                    <div>
                        {links.map((link, index) => {
                            return (
                                <Link
                                    className={`mr-1 ${
                                        index + 1 == links.length
                                            ? "text-secondary"
                                            : "text-black"
                                    }`}
                                    to={link.url}
                                    key={link._id}
                                >
                                    {link.title}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
