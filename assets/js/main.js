document.addEventListener('DOMContentLoaded', function () {

    // let p = 500000;
    // let n = 120;
    // let r = 5 / 12 / 100;


    // const emi = p * r * (((r + 1) ** n) / (((r + 1) ** n) - 1));

    // console.log(emi);

    // const monthlyInterest = emi - (p / n);

    // console.log(monthlyInterest);

    // const totalInterest = monthlyInterest * n;

    // console.log(totalInterest);


    // -------------------------- Form Variables -------------------------- //

    // Form Variable
    let form = document.getElementById('main_form');

    // Input Variables
    let loanAmount = document.getElementById('loan_amount');
    let interestRate = document.getElementById('interest_rate');
    let loanTerm = document.getElementById('loan_term');

    // Output Variables
    let monthlyEMI = document.getElementById('monthly_emi');
    let principleAmount = document.getElementById('principle_amount');
    let totalInterest = document.getElementById('total_interest');
    let amountPayable = document.getElementById('amount_payable');

    // Calculate Button
    const calculateButton = document.getElementById('calculate_btn');




    // ---------------------------------------------------- Event Listeners ---------------------------------------------------- //


    // ---------------- Calculate Button Event Listener ---------------- //
    calculateButton.addEventListener('click', function (e) {
        e.preventDefault();

        let p = loanAmount.value;
        let n = loanTerm.value;
        let r = interestRate.value;

        // Monthly EMI Equation
        const emiEq = p * (r / 12 / 100) * ((((r / 12 / 100) + 1) ** (n * 12)) / ((((r / 12 / 100) + 1) ** (n * 12)) - 1));

        // Total Interest
        const totalInterestEq = emiEq * (n * 12) - p;

        // Total Amount Payable
        const amountPayableEq = emiEq * (n * 12);

        // Output Formatting
        const format = {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR"
        };

        // Condidtional Statement

        // Loan Amount
        if (p === '') {
            loanAmount.style.borderBottom = '3px solid red';
            document.getElementById('loan_amount_error').innerHTML = 'Please enter loan amount';
        }
        else {
            loanAmount.style.borderBottom = '3px solid green';
            document.getElementById('loan_amount_error').innerHTML = '';
        }

        // Loan Term
        if (n === '') {
            loanTerm.style.borderBottom = '3px solid red';
            document.getElementById('loan_term_error').innerHTML = 'Please enter loan term';
        }
        else {
            loanTerm.style.borderBottom = '3px solid green';
            document.getElementById('loan_term_error').innerHTML = '';
        }

        // Interest Rate

        if (r === '') {
            interestRate.style.borderBottom = '3px solid red';
            document.getElementById('interest_rate_error').innerHTML = 'Please enter interest rate';
        }
        else {
            interestRate.style.borderBottom = '3px solid green';
            document.getElementById('interest_rate_error').innerHTML = '';
        }


        // Final Output
        if (p === '' || n === '' || r === '') {
        }
        else {
            monthlyEMI.innerHTML = parseInt(emiEq).toLocaleString("en-IN", format);
            principleAmount.innerHTML = parseInt(p).toLocaleString("en-IN", format);
            totalInterest.innerHTML = parseInt(totalInterestEq).toLocaleString("en-IN", format);
            amountPayable.innerHTML = parseInt(amountPayableEq).toLocaleString("en-IN", format);
        };



    });

    // ---------------- Live Validation ----------------- //

    // Loan Amount
    loanAmount.addEventListener('input', function () {
        // Remove all characters except numbers only
        if (this.value > 99999999) {
            this.value = 99999999;
        }
        else if (this.value < 1) {
            this.value = '';
        };
    });

    // Loan Term
    loanTerm.addEventListener('input', function () {
        // Remove all characters except numbers only
        if (this.value > 10) {
            loanTerm.value = 10;
        }
        else if (this.value < 1) {
            loanTerm.value = '';
        };
    });

    // Interest Rate
    interestRate.addEventListener('input', function () {
        // Remove all characters except numbers only
        if (interestRate.value > 100) {
            interestRate.value = 100;
        }
        else if (interestRate.value < 1) {
            interestRate.value = '';
        };
    });





    // ---------------- Theme Toggle ----------------- //
    let darkModeBtn = document.getElementById('theme-checkbox');
    let calcComponment = document.getElementById('dark_mode');

    darkModeBtn.addEventListener('click', function () {
        calcComponment.classList.toggle('dark');
    });




});