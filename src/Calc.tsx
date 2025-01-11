import { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Table,
    Badge,
    Button
} from 'react-bootstrap';
import { FOUND_DATA, FUCHER_INFLATION_A_MONTH, FUCHER_PROFIT_A_MONTH, TAX_RATE } from './data';
import { calcPastInfulation, calaPastProfit, getFoundFee, calculateFucherProfit, calculateNetProfit } from './util';


const FinancialCalculator2 = () => {
    // State declarations
    const [currentAmount, setAmount] = useState(100);
    const [numOfMothHold, setMothOfHold] = useState(12);
    const [numOfMothWillHolding, setMothOfWillHolding] = useState(12);
    const [currentFund, setCurrentFund] = useState(FOUND_DATA[0].key);
    const [newFund, setNewFund] = useState(FOUND_DATA[1].key);

    const [currentResult, setCurrentResult] = useState(null);
    const [futureResult, setFutureResult] = useState(null);
    const [case1Step1, setCase1Step1] = useState(null);
    const [case1Step2, setCase1Step2] = useState(null);
    const [case2, setCase2] = useState(null);


    const calcLineCount = () => {
        const pastInfulationByMoth = calcPastInfulation(numOfMothHold);
        console.log('-----------',{numOfMothHold},'---',{pastInfulationByMoth},'-------');
        const pastProfitByMoth = calaPastProfit(numOfMothHold);
        console.log('-----------',{numOfMothHold},'---',{pastProfitByMoth},'-----------');
        const feeByMonth = getFoundFee(newFund, numOfMothWillHolding);
        console.log('-----------',{feeByMonth},'-------------',{numOfMothWillHolding},'---------------');
        const fuacherInflationByMonth = ((FUCHER_INFLATION_A_MONTH / 12) * numOfMothWillHolding) / 100;
        console.log('-----------',{fuacherInflationByMonth},'-------------',{numOfMothWillHolding},'--');
        const fuacherProfitByMonth = ((FUCHER_PROFIT_A_MONTH / 12) * numOfMothWillHolding) / 100;
        console.log('-----------',{fuacherProfitByMonth},'-------------',{numOfMothWillHolding},'-----');
        console.log('------------------------------------------------------');    
        
        const resCase1Step1 = calculateNetProfit({
            currentAmount: currentAmount,
            profitPercentage: pastProfitByMoth,
            inflationRatePercentage: pastInfulationByMoth,
            taxRatePercentage: TAX_RATE
        });
        console.log('CASE-1 step 1 - Input ', {
            currentAmount: currentAmount,
            profitPercentage: pastProfitByMoth,
            inflationRatePercentage: pastInfulationByMoth,
            taxRatePercentage: TAX_RATE
        });
        console.log('CASE-1 step 1 - Output ', resCase1Step1);

        const resCase1Step2 = calculateFucherProfit({
            currentAmount: resCase1Step1.nowInvestment,
            profitPercentage: fuacherProfitByMonth,
            inflationRatePercentage: fuacherInflationByMonth,
            feesPercentage: feeByMonth,
            taxRatePercentage: TAX_RATE
        });
        console.log('CASE-1 step 2 - Input ', {
            currentAmount: resCase1Step1.nowInvestment,
            profitPercentage: fuacherProfitByMonth,
            inflationRatePercentage: fuacherInflationByMonth,
            feesPercentage: feeByMonth,
            taxRatePercentage: TAX_RATE
        });
        console.log('CASE-1 step 2 - Outpu', resCase1Step2);

        console.log('CASE-2 Input', {
            currentAmount: currentAmount,
            profitPercentage: fuacherProfitByMonth,
            inflationRatePercentage: pastInfulationByMoth + fuacherInflationByMonth,
            feesPercentage: feeByMonth,
            taxRatePercentage: TAX_RATE
        });
        const resCase2 = calculateFucherProfit({
            currentAmount: currentAmount,
            profitPercentage: fuacherProfitByMonth,
            inflationRatePercentage: pastInfulationByMoth + fuacherInflationByMonth,
            feesPercentage: feeByMonth,
            taxRatePercentage: TAX_RATE
        });
        console.log('CASE-2 Output', resCase2);

        setCase1Step1(resCase1Step1);
        setCase1Step2(resCase1Step2);
        setCase2(resCase2);

        setCurrentResult(resCase2.nowInvestment);
        setFutureResult(resCase1Step2.nowInvestment);
        

    };

    // const calculateResults = () => {
    //     calcLineCount();
    // };

    //useEffect(() => {
    //    calculateResults();
    //}, [calculateResults, currentAmount, currentFund, newFund, numOfMothHold, numOfMothWillHolding]);


    const getInstrumentLabel = (value) => {
        return FOUND_DATA.find(i => i.key === value)?.name || '';
    };

    return (
        <Container fluid className="p-4" dir="rtl">
            <Card className="mb-4">
                <Card.Header>
                    <h2 className="mb-0">כדאיות מעבר</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="number"
                                value={currentAmount}
                                onChange={(e) => setAmount(parseInt(e.target.value))}
                                placeholder="סכום נוכחי (₪)"
                                style={{ textAlign: 'right' }}
                            />
                        </Form.Group>
                    </Form>
                </Card.Header>
                <Card.Body>
                    <Row className="mb-4">
                        <Col md={6}>
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title className="mb-4">הקרן הנוכחית</Card.Title>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Select
                                                value={currentFund}
                                                onChange={(e) => setCurrentFund(e.target.value)}
                                                style={{ textAlign: 'right' }}>
                                                {Object.keys(FOUND_DATA).map((index) =>
                                                    <option key={"current-" + index}
                                                        value={FOUND_DATA[index].key}>
                                                        {FOUND_DATA[index].name} - ({FOUND_DATA[index].price})
                                                    </option>)}
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>מספר חודשים</Form.Label>
                                            <Form.Control
                                                type="number"
                                                value={numOfMothHold}
                                                onChange={(e) => setMothOfHold(parseInt(e.target.value))}
                                                placeholder="הכנס מספר חודשים"
                                                style={{ textAlign: 'right' }}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={6}>
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title className="mb-4">קרן כספתי להחלפה</Card.Title>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Select
                                                value={newFund}
                                                onChange={(e) => setNewFund(e.target.value)}
                                                style={{ textAlign: 'right' }}>
                                                {Object.keys(FOUND_DATA).map((index) =>
                                                    <option key={"current-" + index}
                                                        value={FOUND_DATA[index].key}>
                                                        {FOUND_DATA[index].name} - ({FOUND_DATA[index].price})
                                                    </option>)}
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>מספר חודשים</Form.Label>
                                            <Form.Control
                                                type="number"
                                                value={numOfMothWillHolding}
                                                onChange={(e) => setMothOfWillHolding(parseInt(e.target.value))}
                                                placeholder="הכנס מספר חודשים"
                                                style={{ textAlign: 'right' }}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Button onClick={calcLineCount}>חשב</Button>
                    </Row>
                    {currentResult && futureResult && (
                        <div>
                            <h3 className="mb-4">טבלת השוואה</h3>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th className="text-end">פרמטר</th>
                                        <th className="text-end">להשאר אם הקרן הנוכחית</th>
                                        <th className="text-end">להחליף לקרן</th>
                                        <th className="text-end">הפרש</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-bold">סכום התחלתי</td>
                                        <td>₪{currentAmount.toLocaleString()}</td>
                                        <td>₪{currentAmount.toLocaleString()}</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">מכשיר פיננסי</td>
                                        <td>{getInstrumentLabel(currentFund)}</td>
                                        <td>{getInstrumentLabel(newFund)}</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className="table-active">
                                        <td className="fw-bold">תשלום מס </td>
                                        <td></td>
                                        <td>{case1Step1.nowInvestment.toLocaleString('he-il', { style: 'currency', currency: 'ILS' })}</td>
                                    </tr>
                                    <tr className="table-active">
                                        <td className="fw-bold">סכום לאחר מכירה לפני קניה</td>
                                        <td></td>
                                        <td>{case1Step1.nowInvestment.toLocaleString('he-il', { style: 'currency', currency: 'ILS' })}</td>
                                    </tr>
                                    <tr className="table-active">
                                        <td className="fw-bold">סכום סופי</td>
                                        <td className="fw-bold">
                                            {case2.nowInvestment.toLocaleString('he-il', { style: 'currency', currency: 'ILS' })}
                                        </td>
                                        <td className="fw-bold">
                                            {case1Step2.nowInvestment.toLocaleString('he-il', { style: 'currency', currency: 'ILS' })}
                                        </td>
                                        <td className={`fw-bold ${futureResult > currentResult ? "text-success" : "text-danger"}`}>
                                            ₪{Math.abs(futureResult - currentResult).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            ({((Math.abs(futureResult - currentResult) / currentResult) * 100).toFixed(1)}%)
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            <div className="text-center mt-4 text-muted">
                                <Badge bg={futureResult > currentResult ? "success" : "primary"}>
                                    💡 {futureResult > currentResult ?
                                        "ההשקעה העתידית מניבה תשואה גבוהה יותר" :
                                        "ההשקעה הנוכחית מניבה תשואה גבוהה יותר"}
                                </Badge>
                            </div>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FinancialCalculator2;