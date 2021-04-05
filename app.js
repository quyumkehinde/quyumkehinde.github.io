fetch("https://remotive.io/api/remote-jobs?search=seo&category=marketing")
    .then((res) => res.json())
    .then(function(data){
        jobs = data.jobs;
        let latestDate = data.jobs[0].publication_date;
        latestDate = latestDate.substr(0, 10);
        const dateNode = document.getElementsByClassName("date")[0];
        dateNode.innerHTML = dateNode.innerHTML + latestDate;
        jobs.map(job => {
            console.log(job)
            var company = job.company_name;
            var locate = job.candidate_required_location;
            var date = job.publication_date;
            date = date.substr(0, 10);
            var title = job.title;
            var url = job.url;
            var jobNode = `<div class="jobinfo">
                <p class="company">${company}</p>
                <p class="location">${locate}</p>
                <p class="date">${date}</p>
                <p class="position"><a href="${url}">${title}</a></p>
            </div>`;
            document.querySelector(".jobs").innerHTML = document.querySelector(".jobs").innerHTML + jobNode;
        });
    })
    .catch(function(error){
        console.log(error);
    });