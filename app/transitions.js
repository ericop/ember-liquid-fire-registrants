export default function () {

    this.transition(
        this.fromRoute('registrants'),
        this.toRoute('registrant'),
        this.use('explode', {
            use: ['flyTo', { duration: 1000 }]
        }, {
                use: ['toLeft', { duration: 1000, easing: 'spring' }]
            }, {
                matchBy: "data-reg-id",
                use: ['flyTo', { duration: 1500, easing: [200, 10] }]
            }),
        this.reverse('explode', {
            use: ['flyTo', { duration: 2000 }]
        }, {
                use: ['toRight', { duration: 2000, easing: 'spring' }]
            }, {
                matchBy: "data-reg-id",
                use: ['flyTo', { duration: 1500, easing: [200, 40] }]
            })
        );
}