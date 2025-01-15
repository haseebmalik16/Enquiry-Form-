import { useEffect, useState } from "react";
import EnquiryList from "./EnquiryList";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { ToastContainer, toast } from 'react-toastify';


export default function Enquiry() {
    const [enquiryList, setEnquiryList] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })


    const saveEnquiry = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:8020/api/website/enquiry/insert`, formData).then((res) => {
            console.log(res.data);
            toast.success('Enquiry sent successfully');


            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            })
            getAllEnquiry();
        })
    }

    const getAllEnquiry = () => {
        axios.get(`http://localhost:8020/api/website/enquiry/view`).then((res) => {
            return res.data
        }).then((finalData) => {
            if (finalData.status) {
                setEnquiryList(finalData.enquiryList);
            }
        })
    }

    // values state control kr rha ha. Controlled Component.
    const getValue = (e) => {
        const inputName = e.target.name; // name,email,phone,message mile ga.
        const inputValue = e.target.value; // jo value enter krain ge input mai.
        const oldData = { ...formData } // sallow copy.

        oldData[inputName] = inputValue;
        setFormData(oldData);
    }

    useEffect(() => {
        getAllEnquiry();
    }, [])
    return (
        <div>
            <ToastContainer />
            <h1 className="text-[40px] text-center py-6 font-bold">User Enguiry</h1>
            <div className="grid-cols-[30%_auto] grid px-4 gap-10">
                {/* left part */}
                <div className="bg-gray-200 p-4 rounded-md">
                    <h2 className="text-[20px] font-bold">Enquiry Form</h2>
                    <form
                        action=""
                        onSubmit={saveEnquiry}
                        className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label
                                value="Your name"
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={getValue}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Your Name"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                value="Your Email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={getValue}
                                placeholder="Enter Your Email"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="phone"
                                value="Enter Your Phone"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" />
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={getValue}
                                placeholder="Enter Your Phone"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="message"
                                value="Your Message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={getValue}
                                rows="4"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Your Message...">
                            </textarea>
                        </div>
                        <div className="py-3 flex items-center justify-center">
                            <button
                                type="submit"
                                className="text-white w-full bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 md:px-44 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:text-lg">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
                <EnquiryList data={enquiryList} getAllEnquiry={getAllEnquiry} Swal={Swal} />
            </div>
        </div>
    )
}


