<script lang="ts">
  import { writable } from 'svelte/store';

  //definition or interface or type
  interface Data {
    //the type for the downPayment
    downPayment: number;
    hoa: number;
    hoi: number;
    loanAmount: number;
    loanTerm: number;
    loanType: string;
    price: number;
    principalAndInterest: number;
    rate: number;
    tax: number;
    loanMonths(): number;
  }

  //initialize the data
  const data: Data = {
    downPayment: 10,
    hoa: 0,
    hoi: 0,
    loanAmount: 270000,
    loanTerm: 30,
    loanType: 'Conventional',
    price: 300000,
    principalAndInterest: 1995,
    rate: 6.5,
    tax: 0,

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

    if (Math.floor(downPayment) <= 100) {
      downPayment = downPayment / 100;
      loanAmount = price - price * downPayment;
      data['loanAmount'] = loanAmount;
      downPaymentType = '%';
    } else {
      downPaymentType = '$';
      loanAmount = price - downPayment;
      data['loanAmount'] = loanAmount;
    }

    //principal and interest portion of the payment
    // principalAndInterest =
    //   ((rate / 12) * loanAmount * Math.pow(1 + rate / 12, loanMonths)) / (Math.pow(1 + rate / 12, loanMonths) - 1);
    let principalAndInterest =
      loanAmount * (((rate / 12) * Math.pow(1 + rate / 12, loanMonths)) / (Math.pow(1 + rate / 12, loanMonths) - 1));

    //round it for presentation and set it.
    data['principalAndInterest'] = parseFloat(principalAndInterest.toFixed(2));
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
</script>

<div class="wrapper">
  <div class="grid">
    <!-- controls -->
    <div class="controls">
      <div class="input-wrapper">
        <label for="loanType"> Loan Type </label>
        <select name="loanType" on:input={handleInput}>
          <option value="Conventional">Conventional</option>
          <option value="FHA">FHA</option>
          <option value="VA">VA</option>
        </select>
      </div>
      <div class="input-wrapper">
        <label for="price">Home Price</label>
        <input
          type="number"
          on:input={handleInput}
          name="price"
          step="1000"
          placeholder="The value of the Home"
          bind:value={data.price}
        />
      </div>
      <div class="input-wrapper">
        <label for="downPayment">Down Payment</label>
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
      <div class="input-wrapper">
        <label for="rate"> Interest Rate</label>
        <div class="icon">%</div>
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
    <!-- results -->
    <div class="results">
      loan amount : {data.loanAmount}
      Payment : {data.principalAndInterest}
    </div>
  </div>
</div>

<style lang="scss">
  .input-wrapper {
    display: flex;
    flex-direction: column;
    margin: var(--space-sm) 0;
    position: relative;

    label {
      margin-block: var(--space-xs);
    }

    input,
    select {
      -webkit-appearance: none;
      -moz-appearance: textfield;
      background: transparent;
      position: relative;
      padding: var(--space-xs);
      font-size: var(--text-sm);
      border: solid 1px var(--platinum-600);
      border-radius: 4px;
    }

    .icon {
      line-height: 1.3;
      width: 12px;
      padding: var(--space-xs);
      font-size: var(--text-sm);
      border: solid 0 1px 0 0 var(--platinum-600);
      border-radius: 0px 4px 4px 0px;
      position: absolute;
      background: var(--platinum-200);
      top: 76%;
      right: 0%;
      transform: translateY(-50%);
    }
  }
</style>
