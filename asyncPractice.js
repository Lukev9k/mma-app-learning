function getFeeStatus(studentName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: studentName, feePaid: true, feeAmount: 1500 });
        }, 2000);
    });
}

async function getInfo() {
    try {
        const info = await getFeeStatus("Arjun");
        const { name, feePaid, feeAmount } = info;
        // condition ? "if true" : "if false"
        console.log(`${name} has ${feePaid ? "paid" : "not paid"} their fee of ₹${feeAmount}`);
    } catch (error) {
        console.log(`Something went wrong: ${error.message}`);
    }
}

getInfo();