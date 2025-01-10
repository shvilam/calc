import { PROFIT_DATA, INFLATION_DATA, FOUND_DATA, Result } from './data';

// TODO: Check what happpend more then 12 month
export const calaPastProfit = (numOfMoth: number): number => {
    let profit = 0;
    for (let index: any = 0; index < numOfMoth; index++) {
      profit += PROFIT_DATA[index].value;
      //console.log(PROFIT_DATA[index].date, PROFIT_DATA[index].value, profit);
    }
    return profit/100;
  }
  
  export const getFoundFee = (foundKey: string, numOfMothWillHolding: number): number => {
    //console.log(foundKey, numOfMothWillHolding);
    const item = FOUND_DATA.find((item) => item.key === foundKey);
    if (item) {
       const fee = parseFloat(item.price.replace("%", "") || "0");
       //console.log('XXX',fee, numOfMothWillHolding, ((fee/12)*numOfMothWillHolding)/100);
       return ((fee/12)*numOfMothWillHolding)/100;
    }
    return 0;
  }
  
  
  export const calcPastInfulation = (numOfMoth): number => {
    const months = INFLATION_DATA.month[0].date;
    let totalInfulation = 0;
    for (let index = 0; index < numOfMoth; index++) {
      totalInfulation += months[index].percent;
      //console.log(months[index].monthDesc, months[index].percent, totalInfulation);
    }
    return totalInfulation/100;
  }
  
  export function calculateFucherProfit({currentAmount,
    profitPercentage,
    inflationRatePercentage = 0, 
    feesPercentage = 0,
    taxRatePercentage = 0.25
  }) {
    //console.log({currentAmount,profitPercentage, inflationRatePercentage, feesPercentage, taxRatePercentage});
  
    const fuecherAmount = currentAmount * (1 + profitPercentage);
    const fuecherAmountAferFee = fuecherAmount / (1 + feesPercentage);
    const grossProfit = fuecherAmountAferFee - currentAmount;
    const taxableProfit = Math.max(grossProfit, 0); // Ensure taxable profit is non-negative
    const tax = taxableProfit * Math.max(taxRatePercentage-inflationRatePercentage,0);
  
    const netProfit = taxableProfit - tax;
  
    return {
      fuecherAmount: fuecherAmount.toFixed(2),
      fuecherAmountAferFee: fuecherAmountAferFee,
      grossProfit: grossProfit.toFixed(2),
      tax: tax.toFixed(2),
      netProfit: netProfit.toFixed(2),
      nowInvestment: (currentAmount + netProfit)
    };
  }

  export function calculateNetProfit({
    currentAmount,
    profitPercentage,
    inflationRatePercentage = 0, 
    taxRatePercentage = 0.25 
  }) {
    //console.log({currentAmount, profitPercentage, inflationRatePercentage, taxRatePercentage});
    const initialInvestment: number = currentAmount / (1 + profitPercentage);
    
    const grossProfit = currentAmount - initialInvestment;
    const taxableProfit = Math.max(grossProfit, 0); // Ensure taxable profit is non-negative

    const tax = taxableProfit * Math.max(taxRatePercentage-inflationRatePercentage,0);
    const netProfit = taxableProfit - tax;
  
    return {
      initialInvestment: initialInvestment.toFixed(2),
      grossProfit: grossProfit.toFixed(2),
      tax: tax.toFixed(2),
      netProfit: netProfit.toFixed(2),
      nowInvestment: (initialInvestment + netProfit)
    };
  }
