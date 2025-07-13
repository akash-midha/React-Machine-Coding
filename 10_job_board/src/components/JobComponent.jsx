const JobComponent = ({ by, id, score, time, title, type, url }) => {
    const localeTime = new Date(time * 1000).toLocaleString();
    return <div className="jobComponent">
        <h2 className="job_heading">
            {url ? <a className="job_heading_link" href={url} target="_blank">{title}</a> : <p>{title}</p>}
        </h2>
        <div className="job_desc">
            <span>By {by} · {localeTime}</span>
        </div>
    </div>
}

export default JobComponent