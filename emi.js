// const loanAmount = document.querySelector("#loanAmount")
// const Interest = document.querySelector("#interestRate")
// const loanTenure = document.querySelector("#loanTenure")
// const submitBtn = document.querySelector(".cal")

// submitBtn.addEventListener("click",(e)=>{
//   let emi = (loanAmount * Interest * Math.pow((1+Interest),loanTenure))/(math.pow((1+Interest),loanTenure)-1);
//   // console.log(emi);
//   document.getElementById("result").innerHTML = emi;
// })
  

















function calculateEMI() {
    var loanAmount = document.getElementById("loanAmount").value;
    var interestRate = document.getElementById("interestRate").value / 1200;
    var loanTenure = document.getElementById("loanTenure").value;
    let btn = document.querySelector("#cal")
    var emi = (loanAmount * interestRate * Math.pow((1 + interestRate), loanTenure)) / (Math.pow((1 + interestRate), loanTenure) - 1);
  
    document.getElementById("result").innerHTML = "Your EMI is: $" + emi;
 
  }