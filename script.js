document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('materialForm');
    const totalEstimateDiv = document.getElementById('totalEstimate');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const inputs = form.querySelectorAll('input[type="number"]');
        let total = 0;

        inputs.forEach(function(input) {
            let inputValue = parseInt(input.value) || 0;
            switch (input.id) {
                case 'channel':
                    total += inputValue * 53.50;
                    break;
                case 'angel':
                    total += inputValue * 54.50;
                    break;
                case 'flatPatti':
                    total += inputValue * 55.50;
                    break;
                case 'flatBaar':
                    total += inputValue * 55.50;
                    break;
                case 'patra':
                    total += inputValue * 75;
                    break;
                case 'ceilingSheet':
                    total += inputValue * 1099.15;
                    break;
                case 'weldingRod':
                    total += inputValue * 328.81;
                    break;
                case 'chopSawWheel':
                    total += inputValue * 150;
                    break;
                default:
                    break;
            }
        });

        totalEstimateDiv.textContent = `Total Estimate: ₹${total.toFixed(2)}`;
    });

    const numberInputs = form.querySelectorAll('input[type="number"]');
    numberInputs.forEach(function(input) {
        input.addEventListener('input', function(event) {
            if (!/^\d*\.?\d*$/.test(input.value)) {
                input.value = input.value.replace(/[^\d.]/g, '');
            }
        });
    });
});
