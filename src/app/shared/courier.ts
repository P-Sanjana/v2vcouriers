export class Courier{
    id:number;
    Sendername:string;
    mail:string;
    phNumber:string;
    Senderaddress:string;
    Sendercity:string;
    Senderstate:string;
    agree:boolean;
    contacttype:string;
    repname:string;
    repphNumber:string;
    repaddress:string;
    repcity:string;
    repstate:string;
    courierservice:string;
    pickupdate:Date;
    status:string;
    wt:string;
    vol:string;
    price:string;  
}
export const ContactType = ['None', 'Phone', 'Email'];