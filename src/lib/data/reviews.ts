export default interface Review {
        date: string
        author: string
        content: string
        link: string
        source: string
}

const reviews: Review[] = [
        {
                date: '11/20/2023',
                author: 'Isabella Valdescruz',
                content: 'I worked with Aaron recently on my first home purchase. I was a little apprehensive about the process since it was the first time I was going through it, but Aaron was exactly what I needed! He was available for questions whenever I would call him, would explain everything clearly, and overall made me feel a lot more comfortable during such a stressful process. He also worked extra hard to guarantee I got the best possible rate that I could',
                link: 'https://g.co/kgs/CA4mR9',
                source: 'Google',
        },
        {
                date: '11/4/2023',
                author: 'Kai Steijn REALTOR®',
                content: 'Best lender I’ve ever used, always picks up the phone would recommend to anybody purchasing a home!',
                link: 'https://g.co/kgs/VZ4k55',
                source: 'Google',
        },
        {
                date: '11/1/2023',
                author: 'Allen Odisho',
                content: 'Ramsin and Aaron made the home buying process super simple and easy. We closed in less than 2 weeks. 10/10 would recommend',
                link: 'https://g.co/kgs/Yrie1N',
                source: 'Google',
        },
        {
                date: '10/18/2023',
                author: 'Ayoub Kakish',
                content: `Ramsin Kuryakoos is an outstanding mortgage broker. His expertise and dedication made the mortgage process smooth and stress-free. He's highly knowledgeable, responsive, and an excellent negotiator, securing the best possible terms. Ramsin's personalized approach and professionalism set him apart. I wholeheartedly recommend Ramsin Kuryakoos for anyone seeking mortgage services.`,
                link: 'https://g.co/kgs/4uLSeR',
                source: 'Google',
        },
        {
                date: '4/2/2023',
                author: 'Tyler Riggle',
                content: `I purchased my first house with Aaron's help back in October 2022. He made the process simple for me and gave me plenty of up dates throughout the process. I couldn't recommend him more! His professionalism and experience is the best I have ever dealt with, by far.`,
                link: 'https://www.facebook.com/tyler.riggle.79/posts/pfbid0Ys64kxtTcJ7UryUb85DvFQnHeFV8Pf7nNxsDLuPcfqvWBP39oJC5xo1L4BQ6zr7Jl',
                source: 'Facebook'
        },
]

export {
        reviews
}
