import "./Table.css";
const formatter = new Intl.NumberFormat('en-US' , {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

function Table(props) {
    return (
        <>
            <table className="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {props.passedData.map((calcData)=>(
                    <tr key={calcData.year}>
                        <td>{calcData.year}</td>
                        <td>{formatter.format(calcData.savingsEndOfYear)}</td>
                        <td>{formatter.format(calcData.yearlyInterest)}</td>
                        <td>{formatter.format(calcData.savingsEndOfYear - props.userInvesting - calcData.yearlyContribution * calcData.year)}</td>
                        <td>{formatter.format(props.userInvesting + calcData.yearlyContribution * calcData.year)}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Table;
