export function verifyDateInDatas(response, date) {
    const schedule = response['schedule'];

    return (
        schedule.map(x => x['data'] === date ? console.log(x) : console.log('Nao tem dados'))
    )
};
