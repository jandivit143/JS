const getData = () => {
    // calls an API and gets data
    console.log("fetching data..");
}

const doSomeMagic = function (fn, d){
    let timer;
    return function (){
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments);
        }, d);
    }
}

const betterFunction = doSomeMagic(getData, 300);