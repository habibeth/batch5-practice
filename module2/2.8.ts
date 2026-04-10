{
    type something ={
        name: string;
        age: number;
        city: string;
    }
    //Promise 
    const createPromise = (): Promise<something>=>{
        return new Promise<something>((resolve,reject)=>{
            const data: something = {
                name: "John Doe",
                age: 30,
                city: "New York"
            };
            if(data){
                resolve(data);
            }else{
                reject("No data found");
            }
        });
    }

    const showData = async () : Promise<something>=>{
        const result: something = await createPromise();
        console.log(result);
        return result;
    }

    showData();


    //TODO from jsonplaceholder
    const getToDO = async (): Promise<void> =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    }

    getToDO();  
 
}