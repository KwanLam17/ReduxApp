export default function(state = null, action) {
    switch(state) {
        case null:
            return [
                {title: 'Javascript: The Good Parts', pages: 101 },
                {title: 'Harry Potter', pages: 39 },
                {title: 'The Dark Tower', pages: 85 },
                {title: 'Eloquent Ruby', pages: 1 }
            ]
    }

    return state;

    // return [
    //     {title: 'Javascript: The Good Parts', pages: 101 },
    //     {title: 'Harry Potter', pages: 39 },
    //     {title: 'The Dark Tower', pages: 85 },
    //     {title: 'Eloquent Ruby', pages: 1 }
    // ]
}