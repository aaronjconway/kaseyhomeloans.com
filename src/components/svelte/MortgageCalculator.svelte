<script lang="ts">
  import { writable } from 'svelte/store';

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  //the pieces of data stored in a scenario
  interface Data {
    downPayment: number;
    hoa: number;
    hoi: number;
    loanAmount: number;
    loanTerm: number;
    loanType: string;
    price: number;
    principalAndInterest: number;
    rate: number;
    tax: {
      monthly: number;
      annual: number;
      percentage: number;
    };
    loanMonths(): number;
  }

  //initialize the data
  const data: Data = {
    //dp as a percentage
    downPayment: 10,
    hoa: 0,
    hoi: 0,
    loanAmount: 270000,
    loanTerm: 30,
    loanType: 'Conventional',
    price: 300000,
    principalAndInterest: 1,
    rate: 6.5,
    //converted to a percentage
    tax: {
      monthly: 0,
      annual: 0,
      percentage: 0,
    },

    loanMonths() {
      return this.loanTerm * 12;
    },
  };

  //display variables - things we are using for display only
  let downPaymentType: string;

  // init the store
  const loan = writable(data);

  //subscribe to the store, do math, send to results
  //value is the init data
  loan.subscribe((value) => {
    //init and create new local vars
    //make variables more simple
    // let loanType = value.loanType;
    let downPayment = value.downPayment;
    let price = value.price;
    let loanAmount = value.loanAmount;
    let loanTerm = value.loanTerm;
    let loanMonths = loanTerm * 12;
    let rate = value.rate / 100;

    // the logic for converting the dp to percent of dollars.
    // if if the value is less than 100 assume percent
    if (Math.floor(downPayment) <= 100) {
      //convert
      downPayment = downPayment / 100;
      // calculate the loan amount.
      loanAmount = price - price * downPayment;
      //set it by index
      data['loanAmount'] = loanAmount;
      //set the downPaymentType for displaying it.
      downPaymentType = '%';
    } else {
      downPaymentType = '$';
      loanAmount = price - downPayment;
      data['loanAmount'] = loanAmount;
    }

    //principal and interest portion of the payment
    let principalAndInterest =
      loanAmount * (((rate / 12) * Math.pow(1 + rate / 12, loanMonths)) / (Math.pow(1 + rate / 12, loanMonths) - 1));

    //do not round in the data. so we can have accurate info. round in presentation
    data['principalAndInterest'] = principalAndInterest;
  });

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;

    loan.update((data) => {
      const name: any = target.name;

      //here is where we update the value of data
      data[name] = target.value;
      return data;
    });
  }

  // changes the value of the sibling(property tax) based on the interval
  function handleInterval(event: Event) {
    // get the value of the selected option
    const target = event.target as HTMLInputElement;

    //get the sibliings value
    const sibling = target.nextElementSibling?.nodeValue;
    console.log(sibling);
  }
</script>

<div class="wrapper">
  <div class="grid">
    <!-- controls -->
    <div class="controls">
      <div class="input-wrapper">
        <label for="loanType"> Loan Type </label>
        <div class="input-icon-wrapper">
          <select name="loanType" on:input={handleInput}>
            <option value="Conventional">Conventional</option>
            <option value="FHA">FHA</option>
            <option value="VA">VA</option>
          </select>
        </div>
      </div>
      <div class="input-wrapper">
        <label for="price">Home Price</label>
        <div class="input-icon-wrapper">
          <input
            type="number"
            on:input={handleInput}
            name="price"
            step="1000"
            placeholder="The value of the Home"
            bind:value={data.price}
          />
        </div>
      </div>
      <div class="input-wrapper">
        <label for="downPayment">Down Payment</label>
        <div class="input-icon-wrapper">
          <div class="icon">{downPaymentType}</div>
          <input
            type="number"
            on:input={handleInput}
            name="downPayment"
            min="0"
            placeholder="The amount you're putting down"
            bind:value={data.downPayment}
          />
        </div>
      </div>
      <div class="input-wrapper">
        <label for="rate"> Interest Rate</label>

        <div class="input-icon-wrapper">
          <div class="icon">3</div>
          <input
            type="number"
            inputmode="decimal"
            on:input={handleInput}
            name="rate"
            min="4.5"
            max="10"
            step="0.125"
            placeholder="The interest rate"
            bind:value={data.rate}
          />
        </div>
      </div>
      <div class="input-wrapper">
        <label for="rate">Property Tax</label>
        <div class="input-icon-wrapper">
          <select name="tax-interval" class="internal-select" on:change={handleInterval}>
            <option value="monthly">monthly</option>
            <option value="annual">yearly</option>
            <option value="percent">%</option>
          </select>
          <input
            type="number"
            inputmode="decimal"
            on:input={handleInput}
            name="tax"
            id="tax"
            min="0"
            max="4"
            step="0.1"
            placeholder="Property Tax"
            bind:value={data.tax}
          />
        </div>
      </div>
    </div>
    <!-- results -->
    <div class="results">
      <table>
        <th>Details </th>
        <th>Results</th>
        <!-- will need to add if here as well -->
        <tr>
          <td>Loan Type</td>
          <td>{data.loanType}</td>
        </tr>
        <tr>
          <td>Loan Term</td>
          <td>{data.loanTerm} year fixed</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>{formatter.format(data.price)}</td>
        </tr>
        <tr>
          <td>Loan Amount</td>
          <td>{formatter.format(data.loanAmount)}</td>
          <!-- //second loan need to add if statement -->
          <!-- <td>{formatter.format(data.loanAmount)}</td> -->
          <!-- //results column -->
          <!-- <td>{formatter.format(data.loanAmount)}</td> -->
        </tr>
        <tr>
          <td>Principal and Interest</td>
          <td>{formatter.format(data.principalAndInterest.toFixed(2))}</td>
        </tr>
        <tr>
          <td>Property Tax</td>
          <!-- converted to a monthly amount-->
          <td>{formatter.format((data.tax * data.price) / 12)}</td>
        </tr>
      </table>
    </div>
  </div>
</div>

<style lang="scss">
  table {
    width: 100%;
    // TODO: vary the font size based on columns
    font-size: var(--text-xs);
    border-collapse: collapse;
    border-spacing: 0;
    font-family: Arial, sans-serif;
  }

  th,
  td {
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    color: #333;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f2f2f2;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    margin: var(--space-sm) 0;
    width: 100%;
  }

  .input-icon-wrapper {
    border: solid 1px var(--platinum-600);
    border-radius: 4px;
    position: relative;
  }

  label {
    margin-block: var(--space-xs);
  }

  input {
    width: 100%;
    box-sizing: border-box;
  }

  input,
  select {
    padding: var(--space-xs) 0 var(--space-xs) var(--space-xs);
    border: none;
    -webkit-appearance: none;
    appearance: inherit;
    -moz-appearance: textfield;
    background: transparent;
    border-radius: 4px;
    font-size: var(--text-sm);
  }

  .internal-select {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: var(--text-sm);
    border-radius: 0px 4px 4px 0px;
    position: absolute;
    background: var(--platinum-200);
    right: 0%;
  }

  .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 var(--space-xs);
    width: 12px;
    height: 100%;
    font-size: var(--text-sm);
    border-radius: 0px 4px 4px 0px;
    position: absolute;
    background: var(--platinum-200);
    right: 0%;
  }
</style>
