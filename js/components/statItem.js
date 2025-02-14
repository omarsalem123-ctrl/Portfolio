$(function () {
    $('.c-stat-item__value').each(function (i, item) {
        var $this = $(item);
        var countTo = $this.data('stat-value');



        $({ countNum: $this.text() })
            .animate(
                { countNum: countTo },
                {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
            }
            );
    });
});