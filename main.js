function getData(){

    var url = "https://docs.google.com/spreadsheets/d/1DJyQ8EeuK1lFsDyFaM3YXTrXiMBeTYFDm-dlBzxFh-8"
    var uri = url + "/gviz/tq?tq="

    var sql = "select *"
    var query_string = encodeURIComponent(sql);
    document.getElementById("query-text").innerHTML = uri+query_string;

    axios.get(uri+query_string)
    .then(function (response) {
        // handle success
        console.log(response);
        document.getElementById("result").innerHTML = JSON.stringify(response);

    })
    .catch(function (error) {
        // handle error
        console.log(error);
        document.getElementById("result").innerHTML = error;
    })
    .then(function () {
        // always executed
    });


}