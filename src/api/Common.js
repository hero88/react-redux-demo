import {useState, useEffect} from 'react';

const useFetch = url => {
    const [stat, setStat] = useState([null, false]);
    useEffect(()=> {
        setStat([null, true]);
        (async () => {
            const data = await fetch(url).then(res => res.json());
            setStat([data, false]);
        })();
    }, [url]);
    return stat;
};

const fetchAPI = async (url, opt) => {
    const res = await fetch(url, opt);
    const resData = await res.json();
    return resData;
};

export {useFetch, fetchAPI};