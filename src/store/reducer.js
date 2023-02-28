const initialState = {
    init: 		false,
    locale: 	'',
    localeUrl: 	'',
    isLogged: 	false,
	wrd:{
		i: 0,
		u: '',
		l: ''
	}
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_WRD":         
            return { ...state, wrd: action.payload };
        case "SET_PRV_PG":         
            return { ...state, prv: action.payload };
        case "SET_INIT":         
            return { ...state, init: action.payload };
        case "SET_LOCALE":    
            let url = action.payload === 'ht' ? '' : `/${action.payload}`;
            return { ...state, localeUrl: url, locale: action.payload };
        default:
            return state;
    }
};