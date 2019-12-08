const input = [
    {
      // requires an apartment or house, and property insurance
      companyID:'a',
      apartment: true,
      propertyInsurance: true,
      driverLicense: false,
      carInsurance: false,
      smallCar: false, // 2D/3D car
      bigCar: false, // 4D/5D car
      scooter: false,
      motorcycleInsurance: false,
      massageCertificate: false,
      liabilityInsurance: false,
      storagePlace: false, // garage
      ssn: false,
      paypal: false,
      workPermit: false,
      bike: false,
     },
     {
        //requires 5 door car or 4 door car, and a driver's license and car insurance
      companyID: 'b',
      apartment: false,
      propertyInsurance: false,
      driverLicense: true,
      carInsurance: true,
      smallCar: false, // 2D/3D car
      bigCar: true, // 4D/5D car
      scooter: false,
      motorcycleInsurance: false,
      massageCertificate: false,
      liabilityInsurance: false,
      storagePlace: false, // garage
      ssn: false,
      paypal: false,
      workPermit: false,
      bike: false,
     },
     {
      // requires SSN and work permit
      companyID:'c',
      apartment: false,
      propertyInsurance: false,
      driverLicense: false,
      carInsurance: false,
      smallCar: false, // 2D/3D car
      bigCar: false, // 4D/5D car
      scooter: false,
      motorcycleInsurance: false,
      massageCertificate: false,
      liabilityInsurance: false,
      storagePlace: false, // garage
      ssn: true,
      paypal: false,
      workPermit: true,
      bike: false,
     },
     {
      // requires an apartment or a flat or a house
      companyID :'d',
      apartment: true,
      propertyInsurance: false,
      driverLicense: false,
      carInsurance: false,
      smallCar: false, // 2D/3D car
      bigCar: false, // 4D/5D car
      scooter: false,
      motorcycleInsurance: false,
      massageCertificate: false,
      liabilityInsurance: false,
      storagePlace: false, // garage
      ssn: false,
      paypal: false,
      workPermit: false,
      bike: false,
      },
     {
      // requires a DRIVER LICENSE and a 2 door car or a 3 door car or a 4 door car or a 5 door car
      companyID :'e',
      apartment: false,
      propertyInsurance: false,
      driverLicense: true,
      carInsurance: false,
      smallCar: false, // 2D/3D car
      bigCar: true, // 4D/5D car
      scooter: false,
      motorcycleInsurance: false,
      massageCertificate: false,
      liabilityInsurance: false,
      storagePlace: false, // garage
      ssn: false,
      paypal: false,
      workPermit: false,
      bike: false,
     },
     {
      //   requires a scooter or a bike, or a motorcycle and a driver's license and motorcycle insurance
      companyID: 'f', 
      apartment: false,
      propertyInsurance: false,
      driverLicense: true,
      carInsurance: false,
      smallCar: false, // 2D/3D car
      bigCar: false, // 4D/5D car
      scooter: false,
      motorcycleInsurance: true,
      massageCertificate: false,
      liabilityInsurance: false,
      storagePlace: false, // garage
      ssn: false,
      paypal: false,
      workPermit: false,
      bike: true
     },
     {
      // requires a massage qualification certificate and a liability insurance
      companyID: 'g',  
      apartment: false,
      propertyInsurance: false,
      driverLicense: false,
      carInsurance: false,
      smallCar: false, // 2D/3D car
      bigCar: false, // 4D/5D car
      scooter: false,
      motorcycleInsurance: false,
      massageCertificate: true,
      liabilityInsurance: true,
      storagePlace: false, // garage
      ssn: false,
      paypal: false,
      workPermit: false,
      bike: false
     },
     {
      // requires a storage place or a garage
      companyID: 'h',
      apartment: false,
      propertyInsurance: false,
      driverLicense: false,
      carInsurance: false,
      smallCar: false, // 2D/3D car
      bigCar: false, // 4D/5D car
      scooter: false,
      motorcycleInsurance: false,
      massageCertificate: false,
      liabilityInsurance: false,
      storagePlace: true, // || garage
      ssn: false,
      paypal: false,
      workPermit: false,
      bike: false
     },
     {
      // doesn't require anything, you can come and start working immediately
      companyID: 'j',  
      apartment: false,
      propertyInsurance: false,
      driverLicense: false,
      carInsurance: false,
      smallCar: false, // 2D/3D car
      bigCar: false, // 4D/5D car
      scooter: false,
      motorcycleInsurance: false,
      massageCertificate: false,
      liabilityInsurance: false,
      storagePlace: false, // garage
      ssn: false,
      paypal: false,
      workPermit: false,
      bike: false
     },
     {
      // requires a PayPal account
      companyID: 'k',
      apartment: false,
      propertyInsurance: false,
      driverLicense: false,
      carInsurance: false,
      smallCar: false, // 2D/3D car
      bigCar: false, // 4D/5D car
      scooter: false,
      motorcycleInsurance: false,
      massageCertificate: false,
      liabilityInsurance: false,
      storagePlace: false, // garage
      ssn: false,
      paypal: true,
      workPermit: false,
      bike: false,
     }, 
]

function sortCompanies(input){
   let result = [], result2 = [];
    if(input.length === 0){
       return 'Input should not be empty';
    } else {
        for(let inputItem in input){
            let keys = Object.keys(input[inputItem]), values = Object.values(input[inputItem]);
            keys.shift();
            const companyID = values.shift();
            if(values.filter(i => i === true).length === 0){
                result.push(companyID);
                continue;
            }
            for (let i=0; i < keys.length; i++){ 
                if(keys[i] !== 'bike' && keys[i] !== 'driverLicense' && values[i] === true ){
                    result2.push(companyID);
                    break;
                }
                if(keys[i] === 'bike' || keys[i] === 'driverLicense' && values[i] === true ){
                    keys.splice(i, 1);
                    values.splice(i, 1);
                    const nValues = values.filter(i => i === true);
                    if(nValues.length === 1){
                        const index = values.indexOf(true);
                        if(keys[index] === 'driverLicense' || keys[index] === 'bike'){
                            result.push(companyID);
                            break;
                        } else {
                            result2.push(companyID);
                            break;
                        }
                    } else {
                        result2.push(companyID);
                        break;
                    }
                }
            }
        }
    }
    return {result, result2};
}
const input2 = [];
const output = sortCompanies(input);
console.info(output);
