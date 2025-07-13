import { useEffect, useState } from "react"
import { jobUrl, url } from "../data";
import JobComponent from "./JobComponent";

const HackerBoard = () => {

    const EXAMPLE_RESPONSE = {
        "by": "jamilbk",
        "id": 35908337,
        "score": 1,
        "time": 1683838872,
        "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
        "type": "job",
        "url": "https://www.ycombinator.com/companies/firezone/jobs"
    };

    const [jobId, setJobId] = useState([]);
    const [jobData, setJobData] = useState([EXAMPLE_RESPONSE, EXAMPLE_RESPONSE, EXAMPLE_RESPONSE, EXAMPLE_RESPONSE, EXAMPLE_RESPONSE]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchJobId = async () => {
        try {
            const id = await fetch(url);
            const jsonId = await id.json();
            console.log(jsonId);
            setJobId(jsonId);
        }
        catch (err) {
            console.log(err);
        }
    }

    const fetchJob = async (id) => {
        try {
            const job = await fetch(jobUrl.replace("{id}", id));
            const jsonJob = await job.json();
            console.log(jsonJob);
            setJobData(jsonJob);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchJobId();
        for (let i = 0; i < jobId.length; i++) {
            fetchJob(jobId[i]);
        }
    }, [])
    return <div className="hackerBoard">
        {jobId.length < 1 ? <div className="Loading_btn">Loading
        </div> :
            <div className="job_board">
                {jobData.map((job) => {
                    return <JobComponent {...job} />
                })}
            </div>
        }
    </div>
}

export default HackerBoard