import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utilities/localStorage";
import Donate from "../Donate/Donate";


const Donation = () => {
    const cates = useLoaderData();
    const [donations, setDonations] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storedCateIds = getStoredDonation();
        if (cates.length > 0) {
            const cateAdded = [];
            for (const id of storedCateIds) {
                const cate = cates.find(cate => cate.id === id);
                if (cate) {
                    cateAdded.push(cate);
                }
            }
            setDonations(cateAdded);
            // setDisplayJobs(jobsApplied);
        }
    }, [cates])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 mb-20">
                {
                    donations.slice(0, dataLength).map(donate => <Donate key={donate.id} donate={donate}></Donate>)
                }
            </div>
            <div className={dataLength === donations.length ? 'hidden':'text-center mt-8 mb-16'}>
                <button onClick={()=>setDataLength(donations.length)} className="bg-[#009444] font-semibold px-7 py-4 text-white rounded-lg">See All</button>
            </div>
        </div>

    );
};

export default Donation;