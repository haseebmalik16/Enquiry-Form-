import axios from "axios";
import { toast } from "react-toastify";
export default function EnquiryList({ data, getAllEnquiry,Swal }) {

    const deleteRow = (delid) => {
        Swal.fire({
            title: 'Do you want to delete the Enquiry?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save'
        }).then((result)=>{
            if(result.isConfirmed){
                axios.delete(`http://localhost:8020/api/website/enquiry/delete/${delid}`).then((res) => {
                    toast.success('Enquiry deleted successfully.');
                    getAllEnquiry();
                })

                Swal.fire("Saved","","success");
            }else if(result.isDenied){
                Swal.fire("changes are not saved","","info");
            }
        })
    };

    return (
        <>
            {/* right part */}
            <div className="bg-gray-200 p-4 rounded-md">
                <h2 className="text-[20px] font-bold mb-3">Enquiry List</h2>

                <div className="relative overflow-x-auto rounded-md">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Sr No</th>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Phone</th>
                                <th scope="col" className="px-6 py-3">Message</th>
                                <th scope="col" className="px-6 py-3"><span>Delete</span></th>
                                <th scope="col" className="px-6 py-3"><span>Edit</span></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.length >= 1 ? (
                                    data.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 space-y-2" // Added `space-y-2` for gap
                                        >
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {index + 1}
                                            </th>
                                            <td className="px-6 py-4">{item.name}</td>
                                            <td className="px-6 py-4">{item.email}</td>
                                            <td className="px-6 py-4">{item.phone}</td>
                                            <td className="px-6 py-4">{item.message}</td>
                                            <th scope="col" className="px-6 py-3">
                                                <a
                                                    onClick={() => deleteRow(item._id)}
                                                    className="font-medium text-red-600 hover:underline"
                                                >
                                                    Delete
                                                </a>
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                <a href="#" className="font-medium text-cyan-600 hover:underline">
                                                    Edit
                                                </a>
                                            </th>
                                        </tr>
                                    ))
                                ) : (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            No Data Found.
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
}



{/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    1
                                </th>
                                <td className="px-6 py-4">Haseeb</td>
                                <td className="px-6 py-4">haseeb@gmail.com</td>
                                <td className="px-6 py-4">859359037253290</td>
                                <td className="px-6 py-4">hello</td>
                                <th scope="col" className="px-6 py-3">
                                    <a href="#" className="font-medium text-cyan-600 hover:underline">Delete</a>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <a href="#" className="font-medium text-cyan-600 hover:underline">Edit</a>
                                </th>
                            </tr> */}