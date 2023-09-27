import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utilities/localStorage";
import Donate from "../Donate/Donate";


const Donation = () => {
    const cates = useLoaderData();
    const [donations, setDonations] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    
    const donatePercentage = parseFloat((5/12)*100).toFixed(1);
    const totalPercentage = parseFloat(100-donatePercentage).toFixed(1);
    console.log(totalPercentage)
    console.log(donatePercentage)
    

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
            <div className={ donations.length <= 4 || dataLength === donations.length? 'hidden':'text-center mt-8 mb-16'}>
                <button onClick={()=>setDataLength(donations.length)} className="bg-[#009444] font-semibold px-7 py-4 text-white rounded-lg">See All</button>
            </div>
        </div>
    );
};

export default Donation;