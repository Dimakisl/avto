const server = 'https://jsonplaceholder.typicode.com/posts';

const sentData  = (data, callBack, falseCallback) => {
   const request = new XMLHttpRequest();
   request.open('POST', server);

   request.addEventListener('readystatechange', () => {
    if(request.readyState !== 4) return;
    if(request.status === 200 || request.status === 201){
        const response = JSON.parse(request.responseText);
        callBack(response.id);
    }else{
        falseCallback(request.statusText)
        throw new Error(request.statusText);
    }
   });

   request.send(data);
};


const formElems = document.querySelectorAll('.form');

const formHandler = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let data  = {};

        for(const {name, value} of form.elements){
            if(name){
                data[name] = value;
            }
        }

        console.dir(data);

        const smallElem = document.createElement('small');


        sentData(JSON.stringify(data), (id) => {smallElem.textContent = 'Ваша заявка №' + id + ' ! В ближайщее время с вами свяжутся'; 
    smallElem.style.color="green";
    form.append(smallElem)},
    
     (err) => {smallElem.textContent = 'Ошибка с сервером: ' + err; smallElem.style.color = "red"; form.append(smallElem)});

    });
    form.reset();
};

formElems.forEach(formHandler);

