<div class="technologies">
  <div class="technologies__header">
    <i class="fas fa-compass-drafting technologies__icon " /> Front
  </div>

  <div class="technologies__header">
    <i class="fas fa-gauge-high technologies__icon " /> Back
  </div>

  <div>Front</div>

  <div>Back</div>
</div>

<style>
  .technologies {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .technologies__header {
    padding: 0.5rem;
    border-radius: 10px;
    justify-items: center;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 900;
    color: #00b89c;
    background-color: #dcfaf5;
    text-align: center;
    text-rendering: optimizeLegibility;
    letter-spacing: -0.05rem;
  }

  .technologies__icon {
    font-size: 2rem;
    color: #04493f;
  }
</style>
