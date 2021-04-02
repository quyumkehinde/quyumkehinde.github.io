fetch("https://remotive.io/api/remote-jobs?search=seo&category=marketing")
        .then((res) => res.json())
        .then(function(data){
            jobs = data.jobs;
            jobs.map(job => {
                var company = job.company_name;
                var locate = job.candidate_required_location;
                var title = job.title;
                var url = job.url;
                var jobNode = `<div class="jobinfo">
                    <p class="company">${company}</p>
                    <p class="location">${locate}</p>
                    <p class="position"><a href="${url}">${title}</a></p>

                </div>`;
                document.querySelector(".jobs").innerHTML = document.querySelector(".jobs").innerHTML + jobNode;
            });
        })
        .catch(function(error){
            console.log(error);
        });