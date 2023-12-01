export interface signUp{
    name:string,
    email:string,
    password:string,
}

export interface login{
    email:string,
    password:string,
}

export interface product{
    productname:string,
    price:number,
    color:string,
    category:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined | number,
    productId:undefined|number
}
export interface cart{
    productname:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number| undefined,
    quantity:undefined | number,
    productId:number,
    userId:number
}
export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    delivery:number,
    total:number
  }

  export interface order{
    email:string,
    contact:string,
    address:string,
    totalPrice:number,
    userId:number
    id:number|undefined
  }