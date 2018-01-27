import Chart from 'chart.js';
import axios from 'axios';

async function  createChart (ctx, poll_id) {
    if(!ctx) return;
    //remove portname in deployed url
    const url = "https://"+window.location.hostname+"/result/"+poll_id+"/json";
    console.log(url);
    const poll =  await axios.get(url).then(res => res.data);
    const pollQuestion = poll.question;
    const d = poll.options;
  
    const options = []
    const votes = []
    d.forEach((ele)=>{
        options.push(ele.option);
        votes.push(ele.votes);
    });

    const bgcolors = ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"];
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: options,
            datasets: [
                {
                    backgroundColor: bgcolors,
                    data: votes
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: pollQuestion,
            }
        }
    });

    
}

export default createChart;