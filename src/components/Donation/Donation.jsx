import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utilities/localStorage";
import Donate from "../Donate/Donate";


const Donation = () => {
    const cates = useLoaderData();
    const [donations, setDonations] = useState([]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            {
                donations.map(donate => <Donate key={donate.id} donate={donate}></Donate>)
            }
        </div>
        
    );
};

export default Donation;