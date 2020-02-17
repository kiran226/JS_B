const companies=["TechM","Infosys","CTS","TCS","IBM"];
companies.push("Accenture","Wipro");
// for(let i=0;i<=companies.length;i++){
//     console.log(companies[i]);
// }

companies.forEach(function(company){
    console.log(company);
})