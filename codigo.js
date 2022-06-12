
function draw(){
        var body = d3.select("body");
        
        body.append("section")
        .attr("id", "section1")
        .append("div")
        .attr("class", "blue box")
        .append("p")
        .text("caja azul dinámica");

        body.append("section")
        .attr("id", "section2")
        .append("div")
        .attr("class", "red box")
        .append("p")
        .text("caja roja dinámica");

        d3.select("#section1 > div")
        .attr("class", "blue box");
        d3.select("#section2")
        .select("div")
        .attr("class", "red box");
}